package operations

import (
	"openapi/pkg/models/shared"
)

type AddNotificationChannelHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type AddNotificationChannelRequestBodyConfig struct {
	Sns *shared.SnsChannelConfig `json:"Sns,omitempty"`
}

type AddNotificationChannelRequestBody struct {
	Config AddNotificationChannelRequestBodyConfig `json:"Config"`
}

type AddNotificationChannelRequest struct {
	Headers AddNotificationChannelHeaders
	Request AddNotificationChannelRequestBody `request:"mediaType=application/json"`
}

type AddNotificationChannelResponse struct {
	AccessDeniedException          *interface{}
	AddNotificationChannelResponse *shared.AddNotificationChannelResponse
	ConflictException              *interface{}
	ContentType                    string
	InternalServerException        *interface{}
	ResourceNotFoundException      *interface{}
	ServiceQuotaExceededException  *interface{}
	StatusCode                     int64
	ThrottlingException            *interface{}
	ValidationException            *interface{}
}
