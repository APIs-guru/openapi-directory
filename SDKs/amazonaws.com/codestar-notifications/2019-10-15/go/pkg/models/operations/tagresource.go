package operations

import (
"openapi/pkg/models/shared")

type TagResourceHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type TagResourceRequestBody struct {
    Arn string `json:"Arn"`
    Tags map[string]string `json:"Tags"`
    
}

type TagResourceRequest struct {
    Headers TagResourceHeaders 
    Request TagResourceRequestBody `request:"mediaType=application/json"`
    
}

type TagResourceResponse struct {
    ConcurrentModificationException *interface{} 
    ContentType string 
    ResourceNotFoundException *interface{} 
    StatusCode int64 
    TagResourceResult *shared.TagResourceResult 
    ValidationException *interface{} 
    
}

