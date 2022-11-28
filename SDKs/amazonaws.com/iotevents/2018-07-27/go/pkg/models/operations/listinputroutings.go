package operations

import (
	"openapi/pkg/models/shared"
)

type ListInputRoutingsHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

// ListInputRoutingsRequestBodyInputIdentifier
//
//	The identifer of the input.
type ListInputRoutingsRequestBodyInputIdentifier struct {
	IotEventsInputIdentifier   *shared.IotEventsInputIdentifier   `json:"iotEventsInputIdentifier,omitempty"`
	IotSiteWiseInputIdentifier *shared.IotSiteWiseInputIdentifier `json:"iotSiteWiseInputIdentifier,omitempty"`
}

type ListInputRoutingsRequestBody struct {
	InputIdentifier ListInputRoutingsRequestBodyInputIdentifier `json:"inputIdentifier"`
	MaxResults      *int64                                      `json:"maxResults,omitempty"`
	NextToken       *string                                     `json:"nextToken,omitempty"`
}

type ListInputRoutingsRequest struct {
	Headers ListInputRoutingsHeaders
	Request ListInputRoutingsRequestBody `request:"mediaType=application/json"`
}

type ListInputRoutingsResponse struct {
	ContentType                 string
	InternalFailureException    *interface{}
	InvalidRequestException     *interface{}
	ListInputRoutingsResponse   *shared.ListInputRoutingsResponse
	ResourceNotFoundException   *interface{}
	ServiceUnavailableException *interface{}
	StatusCode                  int64
	ThrottlingException         *interface{}
}
