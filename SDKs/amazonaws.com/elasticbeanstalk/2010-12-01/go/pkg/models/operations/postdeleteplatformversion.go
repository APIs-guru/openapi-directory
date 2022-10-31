package operations




type PostDeletePlatformVersionActionEnum string

const (
    PostDeletePlatformVersionActionEnumDeletePlatformVersion PostDeletePlatformVersionActionEnum = "DeletePlatformVersion"
)



type PostDeletePlatformVersionVersionEnum string

const (
    PostDeletePlatformVersionVersionEnumTwoThousandAndTen1201 PostDeletePlatformVersionVersionEnum = "2010-12-01"
)


type PostDeletePlatformVersionQueryParams struct {
    Action PostDeletePlatformVersionActionEnum `queryParam:"style=form,explode=true,name=Action"`
    Version PostDeletePlatformVersionVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type PostDeletePlatformVersionHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type PostDeletePlatformVersionRequest struct {
    QueryParams PostDeletePlatformVersionQueryParams 
    Headers PostDeletePlatformVersionHeaders 
    Request []byte `request:"mediaType=text/xml"`
    
}

type PostDeletePlatformVersionResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

