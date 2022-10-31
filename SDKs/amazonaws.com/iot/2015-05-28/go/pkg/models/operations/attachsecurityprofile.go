package operations



type AttachSecurityProfilePathParams struct {
    SecurityProfileName string `pathParam:"style=simple,explode=false,name=securityProfileName"`
    
}

type AttachSecurityProfileQueryParams struct {
    SecurityProfileTargetArn string `queryParam:"style=form,explode=true,name=securityProfileTargetArn"`
    
}

type AttachSecurityProfileHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type AttachSecurityProfileRequest struct {
    PathParams AttachSecurityProfilePathParams 
    QueryParams AttachSecurityProfileQueryParams 
    Headers AttachSecurityProfileHeaders 
    
}

type AttachSecurityProfileResponse struct {
    AttachSecurityProfileResponse map[string]interface{} 
    ContentType string 
    InternalFailureException *interface{} 
    InvalidRequestException *interface{} 
    LimitExceededException *interface{} 
    ResourceNotFoundException *interface{} 
    StatusCode int64 
    ThrottlingException *interface{} 
    VersionConflictException *interface{} 
    
}

