package operations




type GetGetAssociatedEnclaveCertificateIamRolesActionEnum string

const (
    GetGetAssociatedEnclaveCertificateIamRolesActionEnumGetAssociatedEnclaveCertificateIamRoles GetGetAssociatedEnclaveCertificateIamRolesActionEnum = "GetAssociatedEnclaveCertificateIamRoles"
)



type GetGetAssociatedEnclaveCertificateIamRolesVersionEnum string

const (
    GetGetAssociatedEnclaveCertificateIamRolesVersionEnumTwoThousandAndSixteen1115 GetGetAssociatedEnclaveCertificateIamRolesVersionEnum = "2016-11-15"
)


type GetGetAssociatedEnclaveCertificateIamRolesQueryParams struct {
    Action GetGetAssociatedEnclaveCertificateIamRolesActionEnum `queryParam:"style=form,explode=true,name=Action"`
    CertificateArn *string `queryParam:"style=form,explode=true,name=CertificateArn"`
    DryRun *bool `queryParam:"style=form,explode=true,name=DryRun"`
    Version GetGetAssociatedEnclaveCertificateIamRolesVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type GetGetAssociatedEnclaveCertificateIamRolesHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type GetGetAssociatedEnclaveCertificateIamRolesRequest struct {
    QueryParams GetGetAssociatedEnclaveCertificateIamRolesQueryParams 
    Headers GetGetAssociatedEnclaveCertificateIamRolesHeaders 
    
}

type GetGetAssociatedEnclaveCertificateIamRolesResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

