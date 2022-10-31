package operations



type GetCloudFrontOriginAccessIdentityConfig20200531PathParams struct {
    ID string `pathParam:"style=simple,explode=false,name=Id"`
    
}

type GetCloudFrontOriginAccessIdentityConfig20200531Headers struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type GetCloudFrontOriginAccessIdentityConfig20200531Request struct {
    PathParams GetCloudFrontOriginAccessIdentityConfig20200531PathParams 
    Headers GetCloudFrontOriginAccessIdentityConfig20200531Headers 
    
}

type GetCloudFrontOriginAccessIdentityConfig20200531Response struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

