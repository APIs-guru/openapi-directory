package operations

import (
	"openapi/pkg/models/shared"
)

type RemoveNotificationChannelPathParams struct {
	ChannelID          string `pathParam:"style=simple,explode=false,name=channelId"`
	ProfilingGroupName string `pathParam:"style=simple,explode=false,name=profilingGroupName"`
}

type RemoveNotificationChannelHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type RemoveNotificationChannelRequest struct {
	PathParams RemoveNotificationChannelPathParams
	Headers    RemoveNotificationChannelHeaders
}

type RemoveNotificationChannelResponse struct {
	ContentType                       string
	InternalServerException           *interface{}
	RemoveNotificationChannelResponse *shared.RemoveNotificationChannelResponse
	ResourceNotFoundException         *interface{}
	StatusCode                        int64
	ThrottlingException               *interface{}
	ValidationException               *interface{}
}
