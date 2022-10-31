package operations




type PostCreateUserActionEnum string

const (
    PostCreateUserActionEnumCreateUser PostCreateUserActionEnum = "CreateUser"
)



type PostCreateUserVersionEnum string

const (
    PostCreateUserVersionEnumTwoThousandAndTen0508 PostCreateUserVersionEnum = "2010-05-08"
)


type PostCreateUserQueryParams struct {
    Action PostCreateUserActionEnum `queryParam:"style=form,explode=true,name=Action"`
    Version PostCreateUserVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type PostCreateUserHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type PostCreateUserRequest struct {
    QueryParams PostCreateUserQueryParams 
    Headers PostCreateUserHeaders 
    Request []byte `request:"mediaType=text/xml"`
    
}

type PostCreateUserResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

