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
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type UpdateRouteResponseRequestBody struct {
	ModelSelectionExpression *string                                `json:"modelSelectionExpression,omitempty"`
	ResponseModels           map[string]string                      `json:"responseModels,omitempty"`
	ResponseParameters       map[string]shared.ParameterConstraints `json:"responseParameters,omitempty"`
	RouteResponseKey         *string                                `json:"routeResponseKey,omitempty"`
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
