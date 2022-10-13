package operations

type PostGetAssociatedEnclaveCertificateIamRolesActionEnum string

const (
	PostGetAssociatedEnclaveCertificateIamRolesActionEnumGetAssociatedEnclaveCertificateIamRoles PostGetAssociatedEnclaveCertificateIamRolesActionEnum = "GetAssociatedEnclaveCertificateIamRoles"
)

type PostGetAssociatedEnclaveCertificateIamRolesVersionEnum string

const (
	PostGetAssociatedEnclaveCertificateIamRolesVersionEnumTwoThousandAndSixteen1115 PostGetAssociatedEnclaveCertificateIamRolesVersionEnum = "2016-11-15"
)

type PostGetAssociatedEnclaveCertificateIamRolesQueryParams struct {
	Action  PostGetAssociatedEnclaveCertificateIamRolesActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostGetAssociatedEnclaveCertificateIamRolesVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostGetAssociatedEnclaveCertificateIamRolesHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostGetAssociatedEnclaveCertificateIamRolesRequest struct {
	QueryParams PostGetAssociatedEnclaveCertificateIamRolesQueryParams
	Headers     PostGetAssociatedEnclaveCertificateIamRolesHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostGetAssociatedEnclaveCertificateIamRolesResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
