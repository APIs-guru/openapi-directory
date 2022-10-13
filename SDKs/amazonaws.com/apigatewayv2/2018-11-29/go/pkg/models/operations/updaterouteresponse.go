package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateRouteResponsePathParams struct {
	APIID           string `pathParam:"style=simple,explode=false,name=apiId"`
	RouteID         string `pathParam:"style=simple,explode=false,name=routeId"`
	RouteResponseID string `pathParam:"style=simple,explode=false,name=routeResponseId"`
}

type UpdateRouteResponseHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type UpdateRouteResponseRequestBody struct {
	ModelSelectionExpression *string                                `json:"modelSelectionExpression"`
	ResponseModels           map[string]string                      `json:"responseModels"`
	ResponseParameters       map[string]shared.ParameterConstraints `json:"responseParameters"`
	RouteResponseKey         *string                                `json:"routeResponseKey"`
}

type UpdateRouteResponseRequest struct {
	PathParams UpdateRouteResponsePathParams
	Headers    UpdateRouteResponseHeaders
	Request    UpdateRouteResponseRequestBody `request:"mediaType=application/json"`
}

type UpdateRouteResponseResponse struct {
	BadRequestException         *interface{}
	ConflictException           *interface{}
	ContentType                 string
	NotFoundException           *interface{}
	StatusCode                  int64
	TooManyRequestsException    *interface{}
	UpdateRouteResponseResponse *shared.UpdateRouteResponseResponse
}
