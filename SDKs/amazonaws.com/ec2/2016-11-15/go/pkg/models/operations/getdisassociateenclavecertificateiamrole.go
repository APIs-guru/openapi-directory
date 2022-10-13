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
	Action         GetDisassociateEnclaveCertificateIamRoleActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	CertificateArn *string                                             `queryParam:"style=form,explode=true,name=CertificateArn"`
	DryRun         *bool                                               `queryParam:"style=form,explode=true,name=DryRun"`
	RoleArn        *string                                             `queryParam:"style=form,explode=true,name=RoleArn"`
	Version        GetDisassociateEnclaveCertificateIamRoleVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type GetDisassociateEnclaveCertificateIamRoleHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetDisassociateEnclaveCertificateIamRoleRequest struct {
	QueryParams GetDisassociateEnclaveCertificateIamRoleQueryParams
	Headers     GetDisassociateEnclaveCertificateIamRoleHeaders
}

type GetDisassociateEnclaveCertificateIamRoleResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
