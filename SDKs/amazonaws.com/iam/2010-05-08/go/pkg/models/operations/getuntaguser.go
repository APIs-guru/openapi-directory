package operations




type GetUntagUserActionEnum string

const (
    GetUntagUserActionEnumUntagUser GetUntagUserActionEnum = "UntagUser"
)



type GetUntagUserVersionEnum string

const (
    GetUntagUserVersionEnumTwoThousandAndTen0508 GetUntagUserVersionEnum = "2010-05-08"
)


type GetUntagUserQueryParams struct {
    Action GetUntagUserActionEnum `queryParam:"style=form,explode=true,name=Action"`
    TagKeys []string `queryParam:"style=form,explode=true,name=TagKeys"`
    UserName string `queryParam:"style=form,explode=true,name=UserName"`
    Version GetUntagUserVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type GetUntagUserHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type GetUntagUserRequest struct {
    QueryParams GetUntagUserQueryParams 
    Headers GetUntagUserHeaders 
    
}

type GetUntagUserResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

