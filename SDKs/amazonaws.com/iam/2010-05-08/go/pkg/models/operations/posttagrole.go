package operations




type PostTagRoleActionEnum string

const (
    PostTagRoleActionEnumTagRole PostTagRoleActionEnum = "TagRole"
)



type PostTagRoleVersionEnum string

const (
    PostTagRoleVersionEnumTwoThousandAndTen0508 PostTagRoleVersionEnum = "2010-05-08"
)


type PostTagRoleQueryParams struct {
    Action PostTagRoleActionEnum `queryParam:"style=form,explode=true,name=Action"`
    Version PostTagRoleVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type PostTagRoleHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type PostTagRoleRequest struct {
    QueryParams PostTagRoleQueryParams 
    Headers PostTagRoleHeaders 
    Request []byte `request:"mediaType=text/xml"`
    
}

type PostTagRoleResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

