package operations

import (
	"openapi/pkg/models/shared"
)

type GetThingShadowPathParams struct {
	ThingName string `pathParam:"style=simple,explode=false,name=thingName"`
}

type GetThingShadowQueryParams struct {
	Name *string `queryParam:"style=form,explode=true,name=name"`
}

type GetThingShadowHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetThingShadowRequest struct {
	PathParams  GetThingShadowPathParams
	QueryParams GetThingShadowQueryParams
	Headers     GetThingShadowHeaders
}

type GetThingShadowResponse struct {
	ContentType                          string
	GetThingShadowResponse               *shared.GetThingShadowResponse
	InternalFailureException             *interface{}
	InvalidRequestException              *interface{}
	MethodNotAllowedException            *interface{}
	ResourceNotFoundException            *interface{}
	ServiceUnavailableException          *interface{}
	StatusCode                           int64
	ThrottlingException                  *interface{}
	UnauthorizedException                *interface{}
	UnsupportedDocumentEncodingException *interface{}
}
