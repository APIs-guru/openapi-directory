package operations

type PostAssociateEnclaveCertificateIamRoleActionEnum string

const (
	PostAssociateEnclaveCertificateIamRoleActionEnumAssociateEnclaveCertificateIamRole PostAssociateEnclaveCertificateIamRoleActionEnum = "AssociateEnclaveCertificateIamRole"
)

type PostAssociateEnclaveCertificateIamRoleVersionEnum string

const (
	PostAssociateEnclaveCertificateIamRoleVersionEnumTwoThousandAndSixteen1115 PostAssociateEnclaveCertificateIamRoleVersionEnum = "2016-11-15"
)

type PostAssociateEnclaveCertificateIamRoleQueryParams struct {
	Action  PostAssociateEnclaveCertificateIamRoleActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostAssociateEnclaveCertificateIamRoleVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostAssociateEnclaveCertificateIamRoleHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostAssociateEnclaveCertificateIamRoleRequest struct {
	QueryParams PostAssociateEnclaveCertificateIamRoleQueryParams
	Headers     PostAssociateEnclaveCertificateIamRoleHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostAssociateEnclaveCertificateIamRoleResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
