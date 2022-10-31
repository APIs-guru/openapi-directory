package operations




type GetGetInstanceProfileActionEnum string

const (
    GetGetInstanceProfileActionEnumGetInstanceProfile GetGetInstanceProfileActionEnum = "GetInstanceProfile"
)



type GetGetInstanceProfileVersionEnum string

const (
    GetGetInstanceProfileVersionEnumTwoThousandAndTen0508 GetGetInstanceProfileVersionEnum = "2010-05-08"
)


type GetGetInstanceProfileQueryParams struct {
    Action GetGetInstanceProfileActionEnum `queryParam:"style=form,explode=true,name=Action"`
    InstanceProfileName string `queryParam:"style=form,explode=true,name=InstanceProfileName"`
    Version GetGetInstanceProfileVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type GetGetInstanceProfileHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type GetGetInstanceProfileRequest struct {
    QueryParams GetGetInstanceProfileQueryParams 
    Headers GetGetInstanceProfileHeaders 
    
}

type GetGetInstanceProfileResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

