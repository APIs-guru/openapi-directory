package operations




type GetDeleteInstanceProfileActionEnum string

const (
    GetDeleteInstanceProfileActionEnumDeleteInstanceProfile GetDeleteInstanceProfileActionEnum = "DeleteInstanceProfile"
)



type GetDeleteInstanceProfileVersionEnum string

const (
    GetDeleteInstanceProfileVersionEnumTwoThousandAndTen0508 GetDeleteInstanceProfileVersionEnum = "2010-05-08"
)


type GetDeleteInstanceProfileQueryParams struct {
    Action GetDeleteInstanceProfileActionEnum `queryParam:"style=form,explode=true,name=Action"`
    InstanceProfileName string `queryParam:"style=form,explode=true,name=InstanceProfileName"`
    Version GetDeleteInstanceProfileVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type GetDeleteInstanceProfileHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type GetDeleteInstanceProfileRequest struct {
    QueryParams GetDeleteInstanceProfileQueryParams 
    Headers GetDeleteInstanceProfileHeaders 
    
}

type GetDeleteInstanceProfileResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

