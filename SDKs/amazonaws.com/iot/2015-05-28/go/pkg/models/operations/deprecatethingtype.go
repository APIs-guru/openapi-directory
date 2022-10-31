package operations



type DeprecateThingTypePathParams struct {
    ThingTypeName string `pathParam:"style=simple,explode=false,name=thingTypeName"`
    
}

type DeprecateThingTypeHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type DeprecateThingTypeRequestBody struct {
    UndoDeprecate *bool `json:"undoDeprecate,omitempty"`
    
}

type DeprecateThingTypeRequest struct {
    PathParams DeprecateThingTypePathParams 
    Headers DeprecateThingTypeHeaders 
    Request DeprecateThingTypeRequestBody `request:"mediaType=application/json"`
    
}

type DeprecateThingTypeResponse struct {
    ContentType string 
    DeprecateThingTypeResponse map[string]interface{} 
    InternalFailureException *interface{} 
    InvalidRequestException *interface{} 
    ResourceNotFoundException *interface{} 
    ServiceUnavailableException *interface{} 
    StatusCode int64 
    ThrottlingException *interface{} 
    UnauthorizedException *interface{} 
    
}

