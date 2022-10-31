package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateThingShadowPathParams struct {
	ThingName string `pathParam:"style=simple,explode=false,name=thingName"`
}

type UpdateThingShadowQueryParams struct {
	Name *string `queryParam:"style=form,explode=true,name=name"`
}

type UpdateThingShadowHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type UpdateThingShadowRequestBody struct {
	Payload string `json:"payload"`
}

type UpdateThingShadowRequest struct {
	PathParams  UpdateThingShadowPathParams
	QueryParams UpdateThingShadowQueryParams
	Headers     UpdateThingShadowHeaders
	Request     UpdateThingShadowRequestBody `request:"mediaType=application/json"`
}

type UpdateThingShadowResponse struct {
	ConflictException                    *interface{}
	ContentType                          string
	InternalFailureException             *interface{}
	InvalidRequestException              *interface{}
	MethodNotAllowedException            *interface{}
	RequestEntityTooLargeException       *interface{}
	ServiceUnavailableException          *interface{}
	StatusCode                           int64
	ThrottlingException                  *interface{}
	UnauthorizedException                *interface{}
	UnsupportedDocumentEncodingException *interface{}
	UpdateThingShadowResponse            *shared.UpdateThingShadowResponse
}
