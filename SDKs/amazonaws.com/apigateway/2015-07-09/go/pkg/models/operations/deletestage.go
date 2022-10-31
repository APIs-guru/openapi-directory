package operations



type DeleteStagePathParams struct {
    RestapiID string `pathParam:"style=simple,explode=false,name=restapi_id"`
    StageName string `pathParam:"style=simple,explode=false,name=stage_name"`
    
}

type DeleteStageHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type DeleteStageRequest struct {
    PathParams DeleteStagePathParams 
    Headers DeleteStageHeaders 
    
}

type DeleteStageResponse struct {
    BadRequestException *interface{} 
    ConflictException *interface{} 
    ContentType string 
    LimitExceededException *interface{} 
    NotFoundException *interface{} 
    StatusCode int64 
    TooManyRequestsException *interface{} 
    UnauthorizedException *interface{} 
    
}

