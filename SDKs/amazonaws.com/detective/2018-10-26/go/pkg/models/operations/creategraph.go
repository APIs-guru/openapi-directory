package operations

import (
"openapi/pkg/models/shared")

type CreateGraphHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type CreateGraphRequestBody struct {
    Tags map[string]string `json:"Tags,omitempty"`
    
}

type CreateGraphRequest struct {
    Headers CreateGraphHeaders 
    Request CreateGraphRequestBody `request:"mediaType=application/json"`
    
}

type CreateGraphResponse struct {
    ConflictException *interface{} 
    ContentType string 
    CreateGraphResponse *shared.CreateGraphResponse 
    InternalServerException *interface{} 
    ServiceQuotaExceededException *interface{} 
    StatusCode int64 
    
}

