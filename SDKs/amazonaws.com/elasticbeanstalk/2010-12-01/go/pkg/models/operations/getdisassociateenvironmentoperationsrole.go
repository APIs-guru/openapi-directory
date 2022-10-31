package operations




type GetDisassociateEnvironmentOperationsRoleActionEnum string

const (
    GetDisassociateEnvironmentOperationsRoleActionEnumDisassociateEnvironmentOperationsRole GetDisassociateEnvironmentOperationsRoleActionEnum = "DisassociateEnvironmentOperationsRole"
)



type GetDisassociateEnvironmentOperationsRoleVersionEnum string

const (
    GetDisassociateEnvironmentOperationsRoleVersionEnumTwoThousandAndTen1201 GetDisassociateEnvironmentOperationsRoleVersionEnum = "2010-12-01"
)


type GetDisassociateEnvironmentOperationsRoleQueryParams struct {
    Action GetDisassociateEnvironmentOperationsRoleActionEnum `queryParam:"style=form,explode=true,name=Action"`
    EnvironmentName string `queryParam:"style=form,explode=true,name=EnvironmentName"`
    Version GetDisassociateEnvironmentOperationsRoleVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type GetDisassociateEnvironmentOperationsRoleHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type GetDisassociateEnvironmentOperationsRoleRequest struct {
    QueryParams GetDisassociateEnvironmentOperationsRoleQueryParams 
    Headers GetDisassociateEnvironmentOperationsRoleHeaders 
    
}

type GetDisassociateEnvironmentOperationsRoleResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

