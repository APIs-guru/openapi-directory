package operations




type GetAssociateEnvironmentOperationsRoleActionEnum string

const (
    GetAssociateEnvironmentOperationsRoleActionEnumAssociateEnvironmentOperationsRole GetAssociateEnvironmentOperationsRoleActionEnum = "AssociateEnvironmentOperationsRole"
)



type GetAssociateEnvironmentOperationsRoleVersionEnum string

const (
    GetAssociateEnvironmentOperationsRoleVersionEnumTwoThousandAndTen1201 GetAssociateEnvironmentOperationsRoleVersionEnum = "2010-12-01"
)


type GetAssociateEnvironmentOperationsRoleQueryParams struct {
    Action GetAssociateEnvironmentOperationsRoleActionEnum `queryParam:"style=form,explode=true,name=Action"`
    EnvironmentName string `queryParam:"style=form,explode=true,name=EnvironmentName"`
    OperationsRole string `queryParam:"style=form,explode=true,name=OperationsRole"`
    Version GetAssociateEnvironmentOperationsRoleVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type GetAssociateEnvironmentOperationsRoleHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type GetAssociateEnvironmentOperationsRoleRequest struct {
    QueryParams GetAssociateEnvironmentOperationsRoleQueryParams 
    Headers GetAssociateEnvironmentOperationsRoleHeaders 
    
}

type GetAssociateEnvironmentOperationsRoleResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

