package operations

import (
	"openapi/pkg/models/shared"
)

type GetResourcesPathParams struct {
	RestapiID string `pathParam:"style=simple,explode=false,name=restapi_id"`
}

type GetResourcesQueryParams struct {
	Embed    []string `queryParam:"style=form,explode=true,name=embed"`
	Limit    *int64   `queryParam:"style=form,explode=true,name=limit"`
	Position *string  `queryParam:"style=form,explode=true,name=position"`
}

type GetResourcesHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetResourcesRequest struct {
	PathParams  GetResourcesPathParams
	QueryParams GetResourcesQueryParams
	Headers     GetResourcesHeaders
}

type GetResourcesResponse struct {
	BadRequestException      *interface{}
	ContentType              string
	NotFoundException        *interface{}
	Resources                *shared.Resources
	StatusCode               int64
	TooManyRequestsException *interface{}
	UnauthorizedException    *interface{}
}
