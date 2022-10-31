package operations




type PostDeleteRolePermissionsBoundaryActionEnum string

const (
    PostDeleteRolePermissionsBoundaryActionEnumDeleteRolePermissionsBoundary PostDeleteRolePermissionsBoundaryActionEnum = "DeleteRolePermissionsBoundary"
)



type PostDeleteRolePermissionsBoundaryVersionEnum string

const (
    PostDeleteRolePermissionsBoundaryVersionEnumTwoThousandAndTen0508 PostDeleteRolePermissionsBoundaryVersionEnum = "2010-05-08"
)


type PostDeleteRolePermissionsBoundaryQueryParams struct {
    Action PostDeleteRolePermissionsBoundaryActionEnum `queryParam:"style=form,explode=true,name=Action"`
    Version PostDeleteRolePermissionsBoundaryVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type PostDeleteRolePermissionsBoundaryHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type PostDeleteRolePermissionsBoundaryRequest struct {
    QueryParams PostDeleteRolePermissionsBoundaryQueryParams 
    Headers PostDeleteRolePermissionsBoundaryHeaders 
    Request []byte `request:"mediaType=text/xml"`
    
}

type PostDeleteRolePermissionsBoundaryResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

