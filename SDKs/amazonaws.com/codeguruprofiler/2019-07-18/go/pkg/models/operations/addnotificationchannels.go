package operations

import (
	"openapi/pkg/models/shared"
)

type AddNotificationChannelsPathParams struct {
	ProfilingGroupName string `pathParam:"style=simple,explode=false,name=profilingGroupName"`
}

type AddNotificationChannelsHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
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
