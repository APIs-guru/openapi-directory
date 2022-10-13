package operations

import (
	"openapi/pkg/models/shared"
)

type GetAPIPathParams struct {
	APIID string `pathParam:"style=simple,explode=false,name=apiId"`
}

type GetAPIHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetAPIRequest struct {
	PathParams GetAPIPathParams
	Headers    GetAPIHeaders
}

type GetAPIResponse struct {
	ContentType              string
	GetAPIResponse           *shared.GetAPIResponse
	NotFoundException        *interface{}
	StatusCode               int64
	TooManyRequestsException *interface{}
}
