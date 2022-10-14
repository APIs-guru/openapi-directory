package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateRoutePathParams struct {
	APIID   string `pathParam:"style=simple,explode=false,name=apiId"`
	RouteID string `pathParam:"style=simple,explode=false,name=routeId"`
}

type UpdateRouteHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type UpdateRouteRequestBodyAuthorizationTypeEnum string

const (
	UpdateRouteRequestBodyAuthorizationTypeEnumNone   UpdateRouteRequestBodyAuthorizationTypeEnum = "NONE"
	UpdateRouteRequestBodyAuthorizationTypeEnumAwsIam UpdateRouteRequestBodyAuthorizationTypeEnum = "AWS_IAM"
	UpdateRouteRequestBodyAuthorizationTypeEnumCustom UpdateRouteRequestBodyAuthorizationTypeEnum = "CUSTOM"
	UpdateRouteRequestBodyAuthorizationTypeEnumJwt    UpdateRouteRequestBodyAuthorizationTypeEnum = "JWT"
)

type UpdateRouteRequestBody struct {
	APIKeyRequired                   *bool                                        `json:"apiKeyRequired,omitempty"`
	AuthorizationScopes              []string                                     `json:"authorizationScopes,omitempty"`
	AuthorizationType                *UpdateRouteRequestBodyAuthorizationTypeEnum `json:"authorizationType,omitempty"`
	AuthorizerID                     *string                                      `json:"authorizerId,omitempty"`
	ModelSelectionExpression         *string                                      `json:"modelSelectionExpression,omitempty"`
	OperationName                    *string                                      `json:"operationName,omitempty"`
	RequestModels                    map[string]string                            `json:"requestModels,omitempty"`
	RequestParameters                map[string]shared.ParameterConstraints       `json:"requestParameters,omitempty"`
	RouteKey                         *string                                      `json:"routeKey,omitempty"`
	RouteResponseSelectionExpression *string                                      `json:"routeResponseSelectionExpression,omitempty"`
	Target                           *string                                      `json:"target,omitempty"`
}

type UpdateRouteRequest struct {
	PathParams UpdateRoutePathParams
	Headers    UpdateRouteHeaders
	Request    UpdateRouteRequestBody `request:"mediaType=application/json"`
}

type UpdateRouteResponse struct {
	BadRequestException      *interface{}
	ConflictException        *interface{}
	ContentType              string
	NotFoundException        *interface{}
	StatusCode               int64
	TooManyRequestsException *interface{}
	UpdateRouteResult        *shared.UpdateRouteResult
}
