package operations




type GetUntagInstanceProfileActionEnum string

const (
    GetUntagInstanceProfileActionEnumUntagInstanceProfile GetUntagInstanceProfileActionEnum = "UntagInstanceProfile"
)



type GetUntagInstanceProfileVersionEnum string

const (
    GetUntagInstanceProfileVersionEnumTwoThousandAndTen0508 GetUntagInstanceProfileVersionEnum = "2010-05-08"
)


type GetUntagInstanceProfileQueryParams struct {
    Action GetUntagInstanceProfileActionEnum `queryParam:"style=form,explode=true,name=Action"`
    InstanceProfileName string `queryParam:"style=form,explode=true,name=InstanceProfileName"`
    TagKeys []string `queryParam:"style=form,explode=true,name=TagKeys"`
    Version GetUntagInstanceProfileVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type GetUntagInstanceProfileHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type GetUntagInstanceProfileRequest struct {
    QueryParams GetUntagInstanceProfileQueryParams 
    Headers GetUntagInstanceProfileHeaders 
    
}

type GetUntagInstanceProfileResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

