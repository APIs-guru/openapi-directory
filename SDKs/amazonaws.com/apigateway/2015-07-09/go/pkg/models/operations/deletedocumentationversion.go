package operations



type DeleteDocumentationVersionPathParams struct {
    DocVersion string `pathParam:"style=simple,explode=false,name=doc_version"`
    RestapiID string `pathParam:"style=simple,explode=false,name=restapi_id"`
    
}

type DeleteDocumentationVersionHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type DeleteDocumentationVersionRequest struct {
    PathParams DeleteDocumentationVersionPathParams 
    Headers DeleteDocumentationVersionHeaders 
    
}

type DeleteDocumentationVersionResponse struct {
    BadRequestException *interface{} 
    ConflictException *interface{} 
    ContentType string 
    NotFoundException *interface{} 
    StatusCode int64 
    TooManyRequestsException *interface{} 
    UnauthorizedException *interface{} 
    
}

