package operations

type GetUntagServerCertificateActionEnum string

const (
	GetUntagServerCertificateActionEnumUntagServerCertificate GetUntagServerCertificateActionEnum = "UntagServerCertificate"
)

type GetUntagServerCertificateVersionEnum string

const (
	GetUntagServerCertificateVersionEnumTwoThousandAndTen0508 GetUntagServerCertificateVersionEnum = "2010-05-08"
)

type GetUntagServerCertificateQueryParams struct {
	Action                GetUntagServerCertificateActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	ServerCertificateName string                               `queryParam:"style=form,explode=true,name=ServerCertificateName"`
	TagKeys               []string                             `queryParam:"style=form,explode=true,name=TagKeys"`
	Version               GetUntagServerCertificateVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type GetUntagServerCertificateHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetUntagServerCertificateRequest struct {
	QueryParams GetUntagServerCertificateQueryParams
	Headers     GetUntagServerCertificateHeaders
}

type GetUntagServerCertificateResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
