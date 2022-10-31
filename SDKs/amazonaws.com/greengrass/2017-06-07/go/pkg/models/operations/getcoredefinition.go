package operations

import (
"openapi/pkg/models/shared")

type GetCoreDefinitionPathParams struct {
    CoreDefinitionID string `pathParam:"style=simple,explode=false,name=CoreDefinitionId"`
    
}

type GetCoreDefinitionHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type GetCoreDefinitionRequest struct {
    PathParams GetCoreDefinitionPathParams 
    Headers GetCoreDefinitionHeaders 
    
}

type GetCoreDefinitionResponse struct {
    BadRequestException *interface{} 
    ContentType string 
    GetCoreDefinitionResponse *shared.GetCoreDefinitionResponse 
    StatusCode int64 
    
}

