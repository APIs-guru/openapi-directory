package operations

import (
	"openapi/pkg/models/shared"
)

type CreateAnalyzerHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type CreateAnalyzerRequestBodyTypeEnum string

const (
	CreateAnalyzerRequestBodyTypeEnumAccount      CreateAnalyzerRequestBodyTypeEnum = "ACCOUNT"
	CreateAnalyzerRequestBodyTypeEnumOrganization CreateAnalyzerRequestBodyTypeEnum = "ORGANIZATION"
)

type CreateAnalyzerRequestBody struct {
	AnalyzerName string                            `json:"analyzerName"`
	ArchiveRules []shared.InlineArchiveRule        `json:"archiveRules"`
	ClientToken  *string                           `json:"clientToken"`
	Tags         map[string]string                 `json:"tags"`
	Type         CreateAnalyzerRequestBodyTypeEnum `json:"type"`
}

type CreateAnalyzerRequest struct {
	Headers CreateAnalyzerHeaders
	Request CreateAnalyzerRequestBody `request:"mediaType=application/json"`
}

type CreateAnalyzerResponse struct {
	AccessDeniedException         *interface{}
	ConflictException             *interface{}
	ContentType                   string
	CreateAnalyzerResponse        *shared.CreateAnalyzerResponse
	InternalServerException       *interface{}
	ServiceQuotaExceededException *interface{}
	StatusCode                    int64
	ThrottlingException           *interface{}
	ValidationException           *interface{}
}
