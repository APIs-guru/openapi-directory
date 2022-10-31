package operations

import (
"openapi/pkg/models/shared")

type PutIntegrationResponsePathParams struct {
    HTTPMethod string `pathParam:"style=simple,explode=false,name=http_method"`
    ResourceID string `pathParam:"style=simple,explode=false,name=resource_id"`
    RestapiID string `pathParam:"style=simple,explode=false,name=restapi_id"`
    StatusCode string `pathParam:"style=simple,explode=false,name=status_code"`
    
}

type PutIntegrationResponseHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}


type PutIntegrationResponseRequestBodyContentHandlingEnum string

const (
    PutIntegrationResponseRequestBodyContentHandlingEnumConvertToBinary PutIntegrationResponseRequestBodyContentHandlingEnum = "CONVERT_TO_BINARY"
PutIntegrationResponseRequestBodyContentHandlingEnumConvertToText PutIntegrationResponseRequestBodyContentHandlingEnum = "CONVERT_TO_TEXT"
)


type PutIntegrationResponseRequestBody struct {
    ContentHandling *PutIntegrationResponseRequestBodyContentHandlingEnum `json:"contentHandling,omitempty"`
    ResponseParameters map[string]string `json:"responseParameters,omitempty"`
    ResponseTemplates map[string]string `json:"responseTemplates,omitempty"`
    SelectionPattern *string `json:"selectionPattern,omitempty"`
    
}

type PutIntegrationResponseRequest struct {
    PathParams PutIntegrationResponsePathParams 
    Headers PutIntegrationResponseHeaders 
    Request PutIntegrationResponseRequestBody `request:"mediaType=application/json"`
    
}

type PutIntegrationResponseResponse struct {
    BadRequestException *interface{} 
    ConflictException *interface{} 
    ContentType string 
    IntegrationResponse *shared.IntegrationResponse 
    LimitExceededException *interface{} 
    NotFoundException *interface{} 
    StatusCode int64 
    TooManyRequestsException *interface{} 
    UnauthorizedException *interface{} 
    
}

