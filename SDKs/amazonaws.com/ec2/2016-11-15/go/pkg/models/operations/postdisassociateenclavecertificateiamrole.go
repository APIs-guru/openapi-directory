package operations

type PostDisassociateEnclaveCertificateIamRoleActionEnum string

const (
	PostDisassociateEnclaveCertificateIamRoleActionEnumDisassociateEnclaveCertificateIamRole PostDisassociateEnclaveCertificateIamRoleActionEnum = "DisassociateEnclaveCertificateIamRole"
)

type PostDisassociateEnclaveCertificateIamRoleVersionEnum string

const (
	PostDisassociateEnclaveCertificateIamRoleVersionEnumTwoThousandAndSixteen1115 PostDisassociateEnclaveCertificateIamRoleVersionEnum = "2016-11-15"
)

type PostDisassociateEnclaveCertificateIamRoleQueryParams struct {
	Action  PostDisassociateEnclaveCertificateIamRoleActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostDisassociateEnclaveCertificateIamRoleVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostDisassociateEnclaveCertificateIamRoleHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type PostDisassociateEnclaveCertificateIamRoleRequest struct {
	QueryParams PostDisassociateEnclaveCertificateIamRoleQueryParams
	Headers     PostDisassociateEnclaveCertificateIamRoleHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostDisassociateEnclaveCertificateIamRoleResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
