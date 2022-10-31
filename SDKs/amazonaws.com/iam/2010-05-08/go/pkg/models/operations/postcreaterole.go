package operations




type PostCreateRoleActionEnum string

const (
    PostCreateRoleActionEnumCreateRole PostCreateRoleActionEnum = "CreateRole"
)



type PostCreateRoleVersionEnum string

const (
    PostCreateRoleVersionEnumTwoThousandAndTen0508 PostCreateRoleVersionEnum = "2010-05-08"
)


type PostCreateRoleQueryParams struct {
    Action PostCreateRoleActionEnum `queryParam:"style=form,explode=true,name=Action"`
    Version PostCreateRoleVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type PostCreateRoleHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type PostCreateRoleRequest struct {
    QueryParams PostCreateRoleQueryParams 
    Headers PostCreateRoleHeaders 
    Request []byte `request:"mediaType=text/xml"`
    
}

type PostCreateRoleResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

