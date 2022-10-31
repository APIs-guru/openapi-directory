package operations

import (
"openapi/pkg/models/shared")

type BatchPutAssetPropertyValueHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type BatchPutAssetPropertyValueRequestBody struct {
    Entries []shared.PutAssetPropertyValueEntry `json:"entries"`
    
}

type BatchPutAssetPropertyValueRequest struct {
    Headers BatchPutAssetPropertyValueHeaders 
    Request BatchPutAssetPropertyValueRequestBody `request:"mediaType=application/json"`
    
}

type BatchPutAssetPropertyValueResponse struct {
    BatchPutAssetPropertyValueResponse *shared.BatchPutAssetPropertyValueResponse 
    ConflictingOperationException *interface{} 
    ContentType string 
    InternalFailureException *interface{} 
    InvalidRequestException *interface{} 
    LimitExceededException *interface{} 
    ResourceNotFoundException *interface{} 
    ServiceUnavailableException *interface{} 
    StatusCode int64 
    ThrottlingException *interface{} 
    
}

