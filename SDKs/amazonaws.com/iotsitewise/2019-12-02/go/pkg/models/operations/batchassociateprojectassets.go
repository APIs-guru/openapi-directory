package operations

import (
"openapi/pkg/models/shared")

type BatchAssociateProjectAssetsPathParams struct {
    ProjectID string `pathParam:"style=simple,explode=false,name=projectId"`
    
}

type BatchAssociateProjectAssetsHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type BatchAssociateProjectAssetsRequestBody struct {
    AssetIds []string `json:"assetIds"`
    ClientToken *string `json:"clientToken,omitempty"`
    
}

type BatchAssociateProjectAssetsRequest struct {
    PathParams BatchAssociateProjectAssetsPathParams 
    Headers BatchAssociateProjectAssetsHeaders 
    Request BatchAssociateProjectAssetsRequestBody `request:"mediaType=application/json"`
    
}

type BatchAssociateProjectAssetsResponse struct {
    BatchAssociateProjectAssetsResponse *shared.BatchAssociateProjectAssetsResponse 
    ContentType string 
    InternalFailureException *interface{} 
    InvalidRequestException *interface{} 
    LimitExceededException *interface{} 
    ResourceNotFoundException *interface{} 
    StatusCode int64 
    ThrottlingException *interface{} 
    
}

