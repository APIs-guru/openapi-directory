package operations

import (
	"openapi/pkg/models/shared"
)

type GetGraphqlAPIPathParams struct {
	APIID string `pathParam:"style=simple,explode=false,name=apiId"`
}

type GetGraphqlAPIHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type GetGraphqlAPIRequest struct {
	PathParams GetGraphqlAPIPathParams
	Headers    GetGraphqlAPIHeaders
}

type GetGraphqlAPIResponse struct {
	AccessDeniedException    *interface{}
	BadRequestException      *interface{}
	ContentType              string
	GetGraphqlAPIResponse    *shared.GetGraphqlAPIResponse
	InternalFailureException *interface{}
	NotFoundException        *interface{}
	StatusCode               int64
	UnauthorizedException    *interface{}
}
