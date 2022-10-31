package operations



type DeleteAPIKeyPathParams struct {
    APIID string `pathParam:"style=simple,explode=false,name=apiId"`
    ID string `pathParam:"style=simple,explode=false,name=id"`
    
}

type DeleteAPIKeyHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type DeleteAPIKeyRequest struct {
    PathParams DeleteAPIKeyPathParams 
    Headers DeleteAPIKeyHeaders 
    
}

type DeleteAPIKeyResponse struct {
    BadRequestException *interface{} 
    ContentType string 
    DeleteAPIKeyResponse map[string]interface{} 
    InternalFailureException *interface{} 
    NotFoundException *interface{} 
    StatusCode int64 
    UnauthorizedException *interface{} 
    
}

