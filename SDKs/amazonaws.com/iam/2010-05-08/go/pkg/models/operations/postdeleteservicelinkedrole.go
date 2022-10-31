package operations




type PostDeleteServiceLinkedRoleActionEnum string

const (
    PostDeleteServiceLinkedRoleActionEnumDeleteServiceLinkedRole PostDeleteServiceLinkedRoleActionEnum = "DeleteServiceLinkedRole"
)



type PostDeleteServiceLinkedRoleVersionEnum string

const (
    PostDeleteServiceLinkedRoleVersionEnumTwoThousandAndTen0508 PostDeleteServiceLinkedRoleVersionEnum = "2010-05-08"
)


type PostDeleteServiceLinkedRoleQueryParams struct {
    Action PostDeleteServiceLinkedRoleActionEnum `queryParam:"style=form,explode=true,name=Action"`
    Version PostDeleteServiceLinkedRoleVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type PostDeleteServiceLinkedRoleHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type PostDeleteServiceLinkedRoleRequest struct {
    QueryParams PostDeleteServiceLinkedRoleQueryParams 
    Headers PostDeleteServiceLinkedRoleHeaders 
    Request []byte `request:"mediaType=text/xml"`
    
}

type PostDeleteServiceLinkedRoleResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

