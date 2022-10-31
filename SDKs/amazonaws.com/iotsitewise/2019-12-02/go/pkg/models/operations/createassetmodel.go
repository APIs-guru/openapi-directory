package operations

import (
"openapi/pkg/models/shared")

type CreateAssetModelHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type CreateAssetModelRequestBody struct {
    AssetModelCompositeModels []shared.AssetModelCompositeModelDefinition `json:"assetModelCompositeModels,omitempty"`
    AssetModelDescription *string `json:"assetModelDescription,omitempty"`
    AssetModelHierarchies []shared.AssetModelHierarchyDefinition `json:"assetModelHierarchies,omitempty"`
    AssetModelName string `json:"assetModelName"`
    AssetModelProperties []shared.AssetModelPropertyDefinition `json:"assetModelProperties,omitempty"`
    ClientToken *string `json:"clientToken,omitempty"`
    Tags map[string]string `json:"tags,omitempty"`
    
}

type CreateAssetModelRequest struct {
    Headers CreateAssetModelHeaders 
    Request CreateAssetModelRequestBody `request:"mediaType=application/json"`
    
}

type CreateAssetModelResponse struct {
    ConflictingOperationException *interface{} 
    ContentType string 
    CreateAssetModelResponse *shared.CreateAssetModelResponse 
    InternalFailureException *interface{} 
    InvalidRequestException *interface{} 
    LimitExceededException *interface{} 
    ResourceAlreadyExistsException *interface{} 
    ResourceNotFoundException *interface{} 
    StatusCode int64 
    ThrottlingException *interface{} 
    
}

