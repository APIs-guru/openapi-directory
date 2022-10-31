package operations



type UpdateAssetPropertyPathParams struct {
    AssetID string `pathParam:"style=simple,explode=false,name=assetId"`
    PropertyID string `pathParam:"style=simple,explode=false,name=propertyId"`
    
}

type UpdateAssetPropertyHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}


type UpdateAssetPropertyRequestBodyPropertyNotificationStateEnum string

const (
    UpdateAssetPropertyRequestBodyPropertyNotificationStateEnumEnabled UpdateAssetPropertyRequestBodyPropertyNotificationStateEnum = "ENABLED"
UpdateAssetPropertyRequestBodyPropertyNotificationStateEnumDisabled UpdateAssetPropertyRequestBodyPropertyNotificationStateEnum = "DISABLED"
)


type UpdateAssetPropertyRequestBody struct {
    ClientToken *string `json:"clientToken,omitempty"`
    PropertyAlias *string `json:"propertyAlias,omitempty"`
    PropertyNotificationState *UpdateAssetPropertyRequestBodyPropertyNotificationStateEnum `json:"propertyNotificationState,omitempty"`
    
}

type UpdateAssetPropertyRequest struct {
    PathParams UpdateAssetPropertyPathParams 
    Headers UpdateAssetPropertyHeaders 
    Request UpdateAssetPropertyRequestBody `request:"mediaType=application/json"`
    
}

type UpdateAssetPropertyResponse struct {
    ConflictingOperationException *interface{} 
    ContentType string 
    InternalFailureException *interface{} 
    InvalidRequestException *interface{} 
    ResourceNotFoundException *interface{} 
    StatusCode int64 
    ThrottlingException *interface{} 
    
}

