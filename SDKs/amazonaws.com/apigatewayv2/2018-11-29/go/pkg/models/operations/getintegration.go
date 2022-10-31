package operations

import (
"openapi/pkg/models/shared")

type GetIntegrationPathParams struct {
    APIID string `pathParam:"style=simple,explode=false,name=apiId"`
    IntegrationID string `pathParam:"style=simple,explode=false,name=integrationId"`
    
}

type GetIntegrationHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type GetIntegrationRequest struct {
    PathParams GetIntegrationPathParams 
    Headers GetIntegrationHeaders 
    
}

type GetIntegrationResponse struct {
    ContentType string 
    GetIntegrationResult *shared.GetIntegrationResult 
    NotFoundException *interface{} 
    StatusCode int64 
    TooManyRequestsException *interface{} 
    
}

