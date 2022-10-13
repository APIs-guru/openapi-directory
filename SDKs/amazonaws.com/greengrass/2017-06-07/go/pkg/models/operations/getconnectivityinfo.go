package operations

import (
	"openapi/pkg/models/shared"
)

type GetConnectivityInfoPathParams struct {
	ThingName string `pathParam:"style=simple,explode=false,name=ThingName"`
}

type GetConnectivityInfoHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetConnectivityInfoRequest struct {
	PathParams GetConnectivityInfoPathParams
	Headers    GetConnectivityInfoHeaders
}

type GetConnectivityInfoResponse struct {
	BadRequestException          *interface{}
	ContentType                  string
	GetConnectivityInfoResponse  *shared.GetConnectivityInfoResponse
	InternalServerErrorException *interface{}
	StatusCode                   int64
}
