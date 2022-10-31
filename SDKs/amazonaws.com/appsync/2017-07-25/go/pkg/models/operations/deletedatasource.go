package operations



type DeleteDataSourcePathParams struct {
    APIID string `pathParam:"style=simple,explode=false,name=apiId"`
    Name string `pathParam:"style=simple,explode=false,name=name"`
    
}

type DeleteDataSourceHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type DeleteDataSourceRequest struct {
    PathParams DeleteDataSourcePathParams 
    Headers DeleteDataSourceHeaders 
    
}

type DeleteDataSourceResponse struct {
    BadRequestException *interface{} 
    ConcurrentModificationException *interface{} 
    ContentType string 
    DeleteDataSourceResponse map[string]interface{} 
    InternalFailureException *interface{} 
    NotFoundException *interface{} 
    StatusCode int64 
    UnauthorizedException *interface{} 
    
}

