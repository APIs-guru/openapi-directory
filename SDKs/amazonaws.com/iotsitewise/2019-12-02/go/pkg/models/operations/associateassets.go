package operations



type AssociateAssetsPathParams struct {
    AssetID string `pathParam:"style=simple,explode=false,name=assetId"`
    
}

type AssociateAssetsHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type AssociateAssetsRequestBody struct {
    ChildAssetID string `json:"childAssetId"`
    ClientToken *string `json:"clientToken,omitempty"`
    HierarchyID string `json:"hierarchyId"`
    
}

type AssociateAssetsRequest struct {
    PathParams AssociateAssetsPathParams 
    Headers AssociateAssetsHeaders 
    Request AssociateAssetsRequestBody `request:"mediaType=application/json"`
    
}

type AssociateAssetsResponse struct {
    ConflictingOperationException *interface{} 
    ContentType string 
    InternalFailureException *interface{} 
    InvalidRequestException *interface{} 
    LimitExceededException *interface{} 
    ResourceNotFoundException *interface{} 
    StatusCode int64 
    ThrottlingException *interface{} 
    
}

