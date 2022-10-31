package operations




type PostUpdateRoleActionEnum string

const (
    PostUpdateRoleActionEnumUpdateRole PostUpdateRoleActionEnum = "UpdateRole"
)



type PostUpdateRoleVersionEnum string

const (
    PostUpdateRoleVersionEnumTwoThousandAndTen0508 PostUpdateRoleVersionEnum = "2010-05-08"
)


type PostUpdateRoleQueryParams struct {
    Action PostUpdateRoleActionEnum `queryParam:"style=form,explode=true,name=Action"`
    Version PostUpdateRoleVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type PostUpdateRoleHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type PostUpdateRoleRequest struct {
    QueryParams PostUpdateRoleQueryParams 
    Headers PostUpdateRoleHeaders 
    Request []byte `request:"mediaType=text/xml"`
    
}

type PostUpdateRoleResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

