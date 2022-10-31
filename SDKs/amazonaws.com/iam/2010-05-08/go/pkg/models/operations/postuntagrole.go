package operations




type PostUntagRoleActionEnum string

const (
    PostUntagRoleActionEnumUntagRole PostUntagRoleActionEnum = "UntagRole"
)



type PostUntagRoleVersionEnum string

const (
    PostUntagRoleVersionEnumTwoThousandAndTen0508 PostUntagRoleVersionEnum = "2010-05-08"
)


type PostUntagRoleQueryParams struct {
    Action PostUntagRoleActionEnum `queryParam:"style=form,explode=true,name=Action"`
    Version PostUntagRoleVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type PostUntagRoleHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type PostUntagRoleRequest struct {
    QueryParams PostUntagRoleQueryParams 
    Headers PostUntagRoleHeaders 
    Request []byte `request:"mediaType=text/xml"`
    
}

type PostUntagRoleResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

