package operations

import (
"openapi/pkg/models/shared")

type CreateAssetHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type CreateAssetRequestBody struct {
    AssetModelID string `json:"assetModelId"`
    AssetName string `json:"assetName"`
    ClientToken *string `json:"clientToken,omitempty"`
    Tags map[string]string `json:"tags,omitempty"`
    
}

type CreateAssetRequest struct {
    Headers CreateAssetHeaders 
    Request CreateAssetRequestBody `request:"mediaType=application/json"`
    
}

type CreateAssetResponse struct {
    ConflictingOperationException *interface{} 
    ContentType string 
    CreateAssetResponse *shared.CreateAssetResponse 
    InternalFailureException *interface{} 
    InvalidRequestException *interface{} 
    LimitExceededException *interface{} 
    ResourceAlreadyExistsException *interface{} 
    ResourceNotFoundException *interface{} 
    StatusCode int64 
    ThrottlingException *interface{} 
    
}

