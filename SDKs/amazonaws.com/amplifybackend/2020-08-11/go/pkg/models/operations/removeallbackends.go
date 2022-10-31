package operations

import (
	"openapi/pkg/models/shared"
)

type RemoveAllBackendsPathParams struct {
	AppID string `pathParam:"style=simple,explode=false,name=appId"`
}

type RemoveAllBackendsHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type RemoveAllBackendsRequestBody struct {
	CleanAmplifyApp *bool `json:"cleanAmplifyApp,omitempty"`
}

type RemoveAllBackendsRequest struct {
	PathParams RemoveAllBackendsPathParams
	Headers    RemoveAllBackendsHeaders
	Request    RemoveAllBackendsRequestBody `request:"mediaType=application/json"`
}

type RemoveAllBackendsResponse struct {
	BadRequestException       *interface{}
	ContentType               string
	GatewayTimeoutException   *interface{}
	NotFoundException         *interface{}
	RemoveAllBackendsResponse *shared.RemoveAllBackendsResponse
	StatusCode                int64
	TooManyRequestsException  *interface{}
}
