package operations

import (
	"openapi/pkg/models/shared"
)

type CreateChannelHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type CreateChannelRequestBodyChannelStorage struct {
	CustomerManagedS3 *shared.CustomerManagedChannelS3Storage `json:"customerManagedS3,omitempty"`
	ServiceManagedS3  map[string]interface{}                  `json:"serviceManagedS3,omitempty"`
}

type CreateChannelRequestBodyRetentionPeriod struct {
	NumberOfDays *int64 `json:"numberOfDays,omitempty"`
	Unlimited    *bool  `json:"unlimited,omitempty"`
}

type CreateChannelRequestBody struct {
	ChannelName     string                                   `json:"channelName"`
	ChannelStorage  *CreateChannelRequestBodyChannelStorage  `json:"channelStorage,omitempty"`
	RetentionPeriod *CreateChannelRequestBodyRetentionPeriod `json:"retentionPeriod,omitempty"`
	Tags            []shared.Tag                             `json:"tags,omitempty"`
}

type CreateChannelRequest struct {
	Headers CreateChannelHeaders
	Request CreateChannelRequestBody `request:"mediaType=application/json"`
}

type CreateChannelResponse struct {
	ContentType                    string
	CreateChannelResponse          *shared.CreateChannelResponse
	InternalFailureException       *interface{}
	InvalidRequestException        *interface{}
	LimitExceededException         *interface{}
	ResourceAlreadyExistsException *interface{}
	ServiceUnavailableException    *interface{}
	StatusCode                     int64
	ThrottlingException            *interface{}
}
