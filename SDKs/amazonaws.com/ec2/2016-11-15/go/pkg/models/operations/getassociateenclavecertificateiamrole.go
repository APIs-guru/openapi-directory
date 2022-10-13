package operations

type GetAssociateEnclaveCertificateIamRoleActionEnum string

const (
	GetAssociateEnclaveCertificateIamRoleActionEnumAssociateEnclaveCertificateIamRole GetAssociateEnclaveCertificateIamRoleActionEnum = "AssociateEnclaveCertificateIamRole"
)

type GetAssociateEnclaveCertificateIamRoleVersionEnum string

const (
	GetAssociateEnclaveCertificateIamRoleVersionEnumTwoThousandAndSixteen1115 GetAssociateEnclaveCertificateIamRoleVersionEnum = "2016-11-15"
)

type GetAssociateEnclaveCertificateIamRoleQueryParams struct {
	Action         GetAssociateEnclaveCertificateIamRoleActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	CertificateArn *string                                          `queryParam:"style=form,explode=true,name=CertificateArn"`
	DryRun         *bool                                            `queryParam:"style=form,explode=true,name=DryRun"`
	RoleArn        *string                                          `queryParam:"style=form,explode=true,name=RoleArn"`
	Version        GetAssociateEnclaveCertificateIamRoleVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type GetAssociateEnclaveCertificateIamRoleHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetAssociateEnclaveCertificateIamRoleRequest struct {
	QueryParams GetAssociateEnclaveCertificateIamRoleQueryParams
	Headers     GetAssociateEnclaveCertificateIamRoleHeaders
}

type GetAssociateEnclaveCertificateIamRoleResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
