package operations

import (
	"openapi/pkg/models/shared"
)

type GetGatewayResponsesPathParams struct {
	RestapiID string `pathParam:"style=simple,explode=false,name=restapi_id"`
}

type GetGatewayResponsesQueryParams struct {
	Limit    *int64  `queryParam:"style=form,explode=true,name=limit"`
	Position *string `queryParam:"style=form,explode=true,name=position"`
}

type GetGatewayResponsesHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetGatewayResponsesRequest struct {
	PathParams  GetGatewayResponsesPathParams
	QueryParams GetGatewayResponsesQueryParams
	Headers     GetGatewayResponsesHeaders
}

type GetGatewayResponsesResponse struct {
	BadRequestException      *interface{}
	ContentType              string
	GatewayResponses         *shared.GatewayResponses
	NotFoundException        *interface{}
	StatusCode               int64
	TooManyRequestsException *interface{}
	UnauthorizedException    *interface{}
}
