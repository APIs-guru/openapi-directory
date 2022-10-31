package operations




type GetListMfaDevicesActionEnum string

const (
    GetListMfaDevicesActionEnumListMfaDevices GetListMfaDevicesActionEnum = "ListMFADevices"
)



type GetListMfaDevicesVersionEnum string

const (
    GetListMfaDevicesVersionEnumTwoThousandAndTen0508 GetListMfaDevicesVersionEnum = "2010-05-08"
)


type GetListMfaDevicesQueryParams struct {
    Action GetListMfaDevicesActionEnum `queryParam:"style=form,explode=true,name=Action"`
    Marker *string `queryParam:"style=form,explode=true,name=Marker"`
    MaxItems *int64 `queryParam:"style=form,explode=true,name=MaxItems"`
    UserName *string `queryParam:"style=form,explode=true,name=UserName"`
    Version GetListMfaDevicesVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type GetListMfaDevicesHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type GetListMfaDevicesRequest struct {
    QueryParams GetListMfaDevicesQueryParams 
    Headers GetListMfaDevicesHeaders 
    
}

type GetListMfaDevicesResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

