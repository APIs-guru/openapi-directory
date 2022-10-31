package operations




type GetDeleteRoleActionEnum string

const (
    GetDeleteRoleActionEnumDeleteRole GetDeleteRoleActionEnum = "DeleteRole"
)



type GetDeleteRoleVersionEnum string

const (
    GetDeleteRoleVersionEnumTwoThousandAndTen0508 GetDeleteRoleVersionEnum = "2010-05-08"
)


type GetDeleteRoleQueryParams struct {
    Action GetDeleteRoleActionEnum `queryParam:"style=form,explode=true,name=Action"`
    RoleName string `queryParam:"style=form,explode=true,name=RoleName"`
    Version GetDeleteRoleVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type GetDeleteRoleHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type GetDeleteRoleRequest struct {
    QueryParams GetDeleteRoleQueryParams 
    Headers GetDeleteRoleHeaders 
    
}

type GetDeleteRoleResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

