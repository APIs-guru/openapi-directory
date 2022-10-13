package operations

import (
	"openapi/pkg/models/shared"
)

type GetDeploymentsPathParams struct {
	RestapiID string `pathParam:"style=simple,explode=false,name=restapi_id"`
}

type GetDeploymentsQueryParams struct {
	Limit    *int64  `queryParam:"style=form,explode=true,name=limit"`
	Position *string `queryParam:"style=form,explode=true,name=position"`
}

type GetDeploymentsHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetDeploymentsRequest struct {
	PathParams  GetDeploymentsPathParams
	QueryParams GetDeploymentsQueryParams
	Headers     GetDeploymentsHeaders
}

type GetDeploymentsResponse struct {
	BadRequestException         *interface{}
	ContentType                 string
	Deployments                 *shared.Deployments
	NotFoundException           *interface{}
	ServiceUnavailableException *interface{}
	StatusCode                  int64
	TooManyRequestsException    *interface{}
	UnauthorizedException       *interface{}
}
