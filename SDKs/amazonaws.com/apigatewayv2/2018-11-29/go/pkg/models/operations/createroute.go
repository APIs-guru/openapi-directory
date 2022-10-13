package operations

import (
	"openapi/pkg/models/shared"
)

type CreateRoutePathParams struct {
	APIID string `pathParam:"style=simple,explode=false,name=apiId"`
}

type CreateRouteHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type CreateRouteRequestBodyAuthorizationTypeEnum string

const (
	CreateRouteRequestBodyAuthorizationTypeEnumNone   CreateRouteRequestBodyAuthorizationTypeEnum = "NONE"
	CreateRouteRequestBodyAuthorizationTypeEnumAwsIam CreateRouteRequestBodyAuthorizationTypeEnum = "AWS_IAM"
	CreateRouteRequestBodyAuthorizationTypeEnumCustom CreateRouteRequestBodyAuthorizationTypeEnum = "CUSTOM"
	CreateRouteRequestBodyAuthorizationTypeEnumJwt    CreateRouteRequestBodyAuthorizationTypeEnum = "JWT"
)

type CreateRouteRequestBody struct {
	APIKeyRequired                   *bool                                        `json:"apiKeyRequired"`
	AuthorizationScopes              []string                                     `json:"authorizationScopes"`
	AuthorizationType                *CreateRouteRequestBodyAuthorizationTypeEnum `json:"authorizationType"`
	AuthorizerID                     *string                                      `json:"authorizerId"`
	ModelSelectionExpression         *string                                      `json:"modelSelectionExpression"`
	OperationName                    *string                                      `json:"operationName"`
	RequestModels                    map[string]string                            `json:"requestModels"`
	RequestParameters                map[string]shared.ParameterConstraints       `json:"requestParameters"`
	RouteKey                         string                                       `json:"routeKey"`
	RouteResponseSelectionExpression *string                                      `json:"routeResponseSelectionExpression"`
	Target                           *string                                      `json:"target"`
}

type CreateRouteRequest struct {
	PathParams CreateRoutePathParams
	Headers    CreateRouteHeaders
	Request    CreateRouteRequestBody `request:"mediaType=application/json"`
}

type CreateRouteResponse struct {
	BadRequestException      *interface{}
	ConflictException        *interface{}
	ContentType              string
	CreateRouteResult        *shared.CreateRouteResult
	NotFoundException        *interface{}
	StatusCode               int64
	TooManyRequestsException *interface{}
}
