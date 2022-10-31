package operations

import (
"openapi/pkg/models/shared")

type GetResourceDefinitionVersionPathParams struct {
    ResourceDefinitionID string `pathParam:"style=simple,explode=false,name=ResourceDefinitionId"`
    ResourceDefinitionVersionID string `pathParam:"style=simple,explode=false,name=ResourceDefinitionVersionId"`
    
}

type GetResourceDefinitionVersionHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type GetResourceDefinitionVersionRequest struct {
    PathParams GetResourceDefinitionVersionPathParams 
    Headers GetResourceDefinitionVersionHeaders 
    
}

type GetResourceDefinitionVersionResponse struct {
    BadRequestException *interface{} 
    ContentType string 
    GetResourceDefinitionVersionResponse *shared.GetResourceDefinitionVersionResponse 
    StatusCode int64 
    
}

