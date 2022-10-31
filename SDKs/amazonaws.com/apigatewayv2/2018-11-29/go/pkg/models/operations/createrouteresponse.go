package operations

import (
"openapi/pkg/models/shared")

type CreateRouteResponsePathParams struct {
    APIID string `pathParam:"style=simple,explode=false,name=apiId"`
    RouteID string `pathParam:"style=simple,explode=false,name=routeId"`
    
}

type CreateRouteResponseHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type CreateRouteResponseRequestBody struct {
    ModelSelectionExpression *string `json:"modelSelectionExpression,omitempty"`
    ResponseModels map[string]string `json:"responseModels,omitempty"`
    ResponseParameters map[string]shared.ParameterConstraints `json:"responseParameters,omitempty"`
    RouteResponseKey string `json:"routeResponseKey"`
    
}

type CreateRouteResponseRequest struct {
    PathParams CreateRouteResponsePathParams 
    Headers CreateRouteResponseHeaders 
    Request CreateRouteResponseRequestBody `request:"mediaType=application/json"`
    
}

type CreateRouteResponseResponse struct {
    BadRequestException *interface{} 
    ConflictException *interface{} 
    ContentType string 
    CreateRouteResponseResponse *shared.CreateRouteResponseResponse 
    NotFoundException *interface{} 
    StatusCode int64 
    TooManyRequestsException *interface{} 
    
}

