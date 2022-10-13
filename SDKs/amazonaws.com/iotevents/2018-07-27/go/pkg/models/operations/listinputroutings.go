package operations

import (
	"openapi/pkg/models/shared"
)

type ListInputRoutingsHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type ListInputRoutingsRequestBodyInputIdentifier struct {
	IotEventsInputIdentifier   *shared.IotEventsInputIdentifier   `json:"iotEventsInputIdentifier"`
	IotSiteWiseInputIdentifier *shared.IotSiteWiseInputIdentifier `json:"iotSiteWiseInputIdentifier"`
}

type ListInputRoutingsRequestBody struct {
	InputIdentifier ListInputRoutingsRequestBodyInputIdentifier `json:"inputIdentifier"`
	MaxResults      *int64                                      `json:"maxResults"`
	NextToken       *string                                     `json:"nextToken"`
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
