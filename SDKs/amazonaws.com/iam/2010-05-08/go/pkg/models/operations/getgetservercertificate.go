package operations

type GetGetServerCertificateActionEnum string

const (
	GetGetServerCertificateActionEnumGetServerCertificate GetGetServerCertificateActionEnum = "GetServerCertificate"
)

type GetGetServerCertificateVersionEnum string

const (
	GetGetServerCertificateVersionEnumTwoThousandAndTen0508 GetGetServerCertificateVersionEnum = "2010-05-08"
)

type GetGetServerCertificateQueryParams struct {
	Action                GetGetServerCertificateActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	ServerCertificateName string                             `queryParam:"style=form,explode=true,name=ServerCertificateName"`
	Version               GetGetServerCertificateVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type GetGetServerCertificateHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetGetServerCertificateRequest struct {
	QueryParams GetGetServerCertificateQueryParams
	Headers     GetGetServerCertificateHeaders
}

type GetGetServerCertificateResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
