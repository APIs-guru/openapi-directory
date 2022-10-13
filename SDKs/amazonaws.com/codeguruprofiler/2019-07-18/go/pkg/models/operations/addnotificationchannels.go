package operations

import (
	"openapi/pkg/models/shared"
)

type AddNotificationChannelsPathParams struct {
	ProfilingGroupName string `pathParam:"style=simple,explode=false,name=profilingGroupName"`
}

type AddNotificationChannelsHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type AddNotificationChannelsRequestBody struct {
	Channels []shared.Channel `json:"channels"`
}

type AddNotificationChannelsRequest struct {
	PathParams AddNotificationChannelsPathParams
	Headers    AddNotificationChannelsHeaders
	Request    AddNotificationChannelsRequestBody `request:"mediaType=application/json"`
}

type AddNotificationChannelsResponse struct {
	AddNotificationChannelsResponse *shared.AddNotificationChannelsResponse
	ConflictException               *interface{}
	ContentType                     string
	InternalServerException         *interface{}
	ResourceNotFoundException       *interface{}
	ServiceQuotaExceededException   *interface{}
	StatusCode                      int64
	ThrottlingException             *interface{}
	ValidationException             *interface{}
}
