package operations

import (
	"openapi/pkg/models/shared"
)

type CreateRouteResponsePathParams struct {
	APIID   string `pathParam:"style=simple,explode=false,name=apiId"`
	RouteID string `pathParam:"style=simple,explode=false,name=routeId"`
}

type CreateRouteResponseHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type CreateRouteResponseRequestBody struct {
	ModelSelectionExpression *string                                `json:"modelSelectionExpression"`
	ResponseModels           map[string]string                      `json:"responseModels"`
	ResponseParameters       map[string]shared.ParameterConstraints `json:"responseParameters"`
	RouteResponseKey         string                                 `json:"routeResponseKey"`
}

type CreateRouteResponseRequest struct {
	PathParams CreateRouteResponsePathParams
	Headers    CreateRouteResponseHeaders
	Request    CreateRouteResponseRequestBody `request:"mediaType=application/json"`
}

type CreateRouteResponseResponse struct {
	BadRequestException         *interface{}
	ConflictException           *interface{}
	ContentType                 string
	CreateRouteResponseResponse *shared.CreateRouteResponseResponse
	NotFoundException           *interface{}
	StatusCode                  int64
	TooManyRequestsException    *interface{}
}
