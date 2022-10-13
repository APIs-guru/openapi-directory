package operations

import (
	"openapi/pkg/models/shared"
)

type CreateLagXAmzTargetEnum string

const (
	CreateLagXAmzTargetEnumOvertureServiceCreateLag CreateLagXAmzTargetEnum = "OvertureService.CreateLag"
)

type CreateLagHeaders struct {
	XAmzAlgorithm     *string                 `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                 `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                 `header:"name=X-Amz-Credential"`
	XAmzDate          *string                 `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                 `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                 `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                 `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        CreateLagXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type CreateLagRequest struct {
	Headers CreateLagHeaders
	Request shared.CreateLagRequest `request:"mediaType=application/json"`
}

type CreateLagResponse struct {
	ContentType                  string
	DirectConnectClientException *interface{}
	DirectConnectServerException *interface{}
	DuplicateTagKeysException    *interface{}
	Lag                          *shared.Lag
	StatusCode                   int64
	TooManyTagsException         *interface{}
}
