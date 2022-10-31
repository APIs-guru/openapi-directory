package operations




type PostListMfaDevicesActionEnum string

const (
    PostListMfaDevicesActionEnumListMfaDevices PostListMfaDevicesActionEnum = "ListMFADevices"
)



type PostListMfaDevicesVersionEnum string

const (
    PostListMfaDevicesVersionEnumTwoThousandAndTen0508 PostListMfaDevicesVersionEnum = "2010-05-08"
)


type PostListMfaDevicesQueryParams struct {
    Action PostListMfaDevicesActionEnum `queryParam:"style=form,explode=true,name=Action"`
    Marker *string `queryParam:"style=form,explode=true,name=Marker"`
    MaxItems *string `queryParam:"style=form,explode=true,name=MaxItems"`
    Version PostListMfaDevicesVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type PostListMfaDevicesHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type PostListMfaDevicesRequest struct {
    QueryParams PostListMfaDevicesQueryParams 
    Headers PostListMfaDevicesHeaders 
    Request []byte `request:"mediaType=text/xml"`
    
}

type PostListMfaDevicesResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

