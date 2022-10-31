package operations



type AttachThingPrincipalPathParams struct {
    ThingName string `pathParam:"style=simple,explode=false,name=thingName"`
    
}

type AttachThingPrincipalHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmznPrincipal string `header:"style=simple,explode=false,name=x-amzn-principal"`
    
}

type AttachThingPrincipalRequest struct {
    PathParams AttachThingPrincipalPathParams 
    Headers AttachThingPrincipalHeaders 
    
}

type AttachThingPrincipalResponse struct {
    AttachThingPrincipalResponse map[string]interface{} 
    ContentType string 
    InternalFailureException *interface{} 
    InvalidRequestException *interface{} 
    ResourceNotFoundException *interface{} 
    ServiceUnavailableException *interface{} 
    StatusCode int64 
    ThrottlingException *interface{} 
    UnauthorizedException *interface{} 
    
}

