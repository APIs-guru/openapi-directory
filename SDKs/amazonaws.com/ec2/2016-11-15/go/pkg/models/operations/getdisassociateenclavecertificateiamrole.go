package operations




type GetDisassociateEnclaveCertificateIamRoleActionEnum string

const (
    GetDisassociateEnclaveCertificateIamRoleActionEnumDisassociateEnclaveCertificateIamRole GetDisassociateEnclaveCertificateIamRoleActionEnum = "DisassociateEnclaveCertificateIamRole"
)



type GetDisassociateEnclaveCertificateIamRoleVersionEnum string

const (
    GetDisassociateEnclaveCertificateIamRoleVersionEnumTwoThousandAndSixteen1115 GetDisassociateEnclaveCertificateIamRoleVersionEnum = "2016-11-15"
)


type GetDisassociateEnclaveCertificateIamRoleQueryParams struct {
    Action GetDisassociateEnclaveCertificateIamRoleActionEnum `queryParam:"style=form,explode=true,name=Action"`
    CertificateArn *string `queryParam:"style=form,explode=true,name=CertificateArn"`
    DryRun *bool `queryParam:"style=form,explode=true,name=DryRun"`
    RoleArn *string `queryParam:"style=form,explode=true,name=RoleArn"`
    Version GetDisassociateEnclaveCertificateIamRoleVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type GetDisassociateEnclaveCertificateIamRoleHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type GetDisassociateEnclaveCertificateIamRoleRequest struct {
    QueryParams GetDisassociateEnclaveCertificateIamRoleQueryParams 
    Headers GetDisassociateEnclaveCertificateIamRoleHeaders 
    
}

type GetDisassociateEnclaveCertificateIamRoleResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

