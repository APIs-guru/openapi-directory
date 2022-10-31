package operations



type DeleteAccessPointPathParams struct {
    AccessPointID string `pathParam:"style=simple,explode=false,name=AccessPointId"`
    
}

type DeleteAccessPointHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type DeleteAccessPointRequest struct {
    PathParams DeleteAccessPointPathParams 
    Headers DeleteAccessPointHeaders 
    
}

type DeleteAccessPointResponse struct {
    AccessPointNotFound *interface{} 
    BadRequest *interface{} 
    ContentType string 
    InternalServerError *interface{} 
    StatusCode int64 
    
}

