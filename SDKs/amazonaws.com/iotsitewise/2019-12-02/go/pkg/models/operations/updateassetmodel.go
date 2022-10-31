package operations

import (
"openapi/pkg/models/shared")

type UpdateAssetModelPathParams struct {
    AssetModelID string `pathParam:"style=simple,explode=false,name=assetModelId"`
    
}

type UpdateAssetModelHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type UpdateAssetModelRequestBody struct {
    AssetModelCompositeModels []shared.AssetModelCompositeModel `json:"assetModelCompositeModels,omitempty"`
    AssetModelDescription *string `json:"assetModelDescription,omitempty"`
    AssetModelHierarchies []shared.AssetModelHierarchy `json:"assetModelHierarchies,omitempty"`
    AssetModelName string `json:"assetModelName"`
    AssetModelProperties []shared.AssetModelProperty `json:"assetModelProperties,omitempty"`
    ClientToken *string `json:"clientToken,omitempty"`
    
}

type UpdateAssetModelRequest struct {
    PathParams UpdateAssetModelPathParams 
    Headers UpdateAssetModelHeaders 
    Request UpdateAssetModelRequestBody `request:"mediaType=application/json"`
    
}

type UpdateAssetModelResponse struct {
    ConflictingOperationException *interface{} 
    ContentType string 
    InternalFailureException *interface{} 
    InvalidRequestException *interface{} 
    LimitExceededException *interface{} 
    ResourceAlreadyExistsException *interface{} 
    ResourceNotFoundException *interface{} 
    StatusCode int64 
    ThrottlingException *interface{} 
    UpdateAssetModelResponse *shared.UpdateAssetModelResponse 
    
}

