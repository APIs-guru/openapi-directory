package operations

import (
	"openapi/pkg/models/shared"
)

type ImportComponentHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type ImportComponentRequestBodyFormatEnum string

const (
	ImportComponentRequestBodyFormatEnumShell ImportComponentRequestBodyFormatEnum = "SHELL"
)

type ImportComponentRequestBodyPlatformEnum string

const (
	ImportComponentRequestBodyPlatformEnumWindows ImportComponentRequestBodyPlatformEnum = "Windows"
	ImportComponentRequestBodyPlatformEnumLinux   ImportComponentRequestBodyPlatformEnum = "Linux"
)

type ImportComponentRequestBodyTypeEnum string

const (
	ImportComponentRequestBodyTypeEnumBuild ImportComponentRequestBodyTypeEnum = "BUILD"
	ImportComponentRequestBodyTypeEnumTest  ImportComponentRequestBodyTypeEnum = "TEST"
)

type ImportComponentRequestBody struct {
	ChangeDescription *string                                `json:"changeDescription"`
	ClientToken       string                                 `json:"clientToken"`
	Data              *string                                `json:"data"`
	Description       *string                                `json:"description"`
	Format            ImportComponentRequestBodyFormatEnum   `json:"format"`
	KmsKeyID          *string                                `json:"kmsKeyId"`
	Name              string                                 `json:"name"`
	Platform          ImportComponentRequestBodyPlatformEnum `json:"platform"`
	SemanticVersion   string                                 `json:"semanticVersion"`
	Tags              map[string]string                      `json:"tags"`
	Type              ImportComponentRequestBodyTypeEnum     `json:"type"`
	URI               *string                                `json:"uri"`
}

type ImportComponentRequest struct {
	Headers ImportComponentHeaders
	Request ImportComponentRequestBody `request:"mediaType=application/json"`
}

type ImportComponentResponse struct {
	CallRateLimitExceededException       *interface{}
	ClientException                      *interface{}
	ContentType                          string
	ForbiddenException                   *interface{}
	IdempotentParameterMismatchException *interface{}
	ImportComponentResponse              *shared.ImportComponentResponse
	InvalidParameterCombinationException *interface{}
	InvalidRequestException              *interface{}
	InvalidVersionNumberException        *interface{}
	ResourceInUseException               *interface{}
	ServiceException                     *interface{}
	ServiceUnavailableException          *interface{}
	StatusCode                           int64
}
