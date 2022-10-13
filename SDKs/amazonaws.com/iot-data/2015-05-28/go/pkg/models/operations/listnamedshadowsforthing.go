package operations

import (
	"openapi/pkg/models/shared"
)

type ListNamedShadowsForThingPathParams struct {
	ThingName string `pathParam:"style=simple,explode=false,name=thingName"`
}

type ListNamedShadowsForThingQueryParams struct {
	NextToken *string `queryParam:"style=form,explode=true,name=nextToken"`
	PageSize  *int64  `queryParam:"style=form,explode=true,name=pageSize"`
}

type ListNamedShadowsForThingHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type ListNamedShadowsForThingRequest struct {
	PathParams  ListNamedShadowsForThingPathParams
	QueryParams ListNamedShadowsForThingQueryParams
	Headers     ListNamedShadowsForThingHeaders
}

type ListNamedShadowsForThingResponse struct {
	ContentType                      string
	InternalFailureException         *interface{}
	InvalidRequestException          *interface{}
	ListNamedShadowsForThingResponse *shared.ListNamedShadowsForThingResponse
	MethodNotAllowedException        *interface{}
	ResourceNotFoundException        *interface{}
	ServiceUnavailableException      *interface{}
	StatusCode                       int64
	ThrottlingException              *interface{}
	UnauthorizedException            *interface{}
}
