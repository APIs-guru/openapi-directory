package operations




type PostDisassociateEnvironmentOperationsRoleActionEnum string

const (
    PostDisassociateEnvironmentOperationsRoleActionEnumDisassociateEnvironmentOperationsRole PostDisassociateEnvironmentOperationsRoleActionEnum = "DisassociateEnvironmentOperationsRole"
)



type PostDisassociateEnvironmentOperationsRoleVersionEnum string

const (
    PostDisassociateEnvironmentOperationsRoleVersionEnumTwoThousandAndTen1201 PostDisassociateEnvironmentOperationsRoleVersionEnum = "2010-12-01"
)


type PostDisassociateEnvironmentOperationsRoleQueryParams struct {
    Action PostDisassociateEnvironmentOperationsRoleActionEnum `queryParam:"style=form,explode=true,name=Action"`
    Version PostDisassociateEnvironmentOperationsRoleVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type PostDisassociateEnvironmentOperationsRoleHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type PostDisassociateEnvironmentOperationsRoleRequest struct {
    QueryParams PostDisassociateEnvironmentOperationsRoleQueryParams 
    Headers PostDisassociateEnvironmentOperationsRoleHeaders 
    Request []byte `request:"mediaType=text/xml"`
    
}

type PostDisassociateEnvironmentOperationsRoleResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

