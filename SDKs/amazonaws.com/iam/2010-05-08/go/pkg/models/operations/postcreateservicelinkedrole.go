package operations




type PostCreateServiceLinkedRoleActionEnum string

const (
    PostCreateServiceLinkedRoleActionEnumCreateServiceLinkedRole PostCreateServiceLinkedRoleActionEnum = "CreateServiceLinkedRole"
)



type PostCreateServiceLinkedRoleVersionEnum string

const (
    PostCreateServiceLinkedRoleVersionEnumTwoThousandAndTen0508 PostCreateServiceLinkedRoleVersionEnum = "2010-05-08"
)


type PostCreateServiceLinkedRoleQueryParams struct {
    Action PostCreateServiceLinkedRoleActionEnum `queryParam:"style=form,explode=true,name=Action"`
    Version PostCreateServiceLinkedRoleVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type PostCreateServiceLinkedRoleHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type PostCreateServiceLinkedRoleRequest struct {
    QueryParams PostCreateServiceLinkedRoleQueryParams 
    Headers PostCreateServiceLinkedRoleHeaders 
    Request []byte `request:"mediaType=text/xml"`
    
}

type PostCreateServiceLinkedRoleResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

