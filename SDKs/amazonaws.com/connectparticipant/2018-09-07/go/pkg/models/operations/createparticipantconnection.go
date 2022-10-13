package operations

import (
	"openapi/pkg/models/shared"
)

type CreateParticipantConnectionHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzBearer        string  `header:"name=X-Amz-Bearer"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type CreateParticipantConnectionRequestBody struct {
	Type []shared.ConnectionTypeEnum `json:"Type"`
}

type CreateParticipantConnectionRequest struct {
	Headers CreateParticipantConnectionHeaders
	Request CreateParticipantConnectionRequestBody `request:"mediaType=application/json"`
}

type CreateParticipantConnectionResponse struct {
	AccessDeniedException               *interface{}
	ContentType                         string
	CreateParticipantConnectionResponse *shared.CreateParticipantConnectionResponse
	InternalServerException             *interface{}
	StatusCode                          int64
	ThrottlingException                 *interface{}
	ValidationException                 *interface{}
}
