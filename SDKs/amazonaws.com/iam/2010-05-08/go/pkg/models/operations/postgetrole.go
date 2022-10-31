package operations




type PostGetRoleActionEnum string

const (
    PostGetRoleActionEnumGetRole PostGetRoleActionEnum = "GetRole"
)



type PostGetRoleVersionEnum string

const (
    PostGetRoleVersionEnumTwoThousandAndTen0508 PostGetRoleVersionEnum = "2010-05-08"
)


type PostGetRoleQueryParams struct {
    Action PostGetRoleActionEnum `queryParam:"style=form,explode=true,name=Action"`
    Version PostGetRoleVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type PostGetRoleHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type PostGetRoleRequest struct {
    QueryParams PostGetRoleQueryParams 
    Headers PostGetRoleHeaders 
    Request []byte `request:"mediaType=text/xml"`
    
}

type PostGetRoleResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

