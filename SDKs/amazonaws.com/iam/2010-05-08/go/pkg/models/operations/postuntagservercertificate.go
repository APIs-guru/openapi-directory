package operations

type PostUntagServerCertificateActionEnum string

const (
	PostUntagServerCertificateActionEnumUntagServerCertificate PostUntagServerCertificateActionEnum = "UntagServerCertificate"
)

type PostUntagServerCertificateVersionEnum string

const (
	PostUntagServerCertificateVersionEnumTwoThousandAndTen0508 PostUntagServerCertificateVersionEnum = "2010-05-08"
)

type PostUntagServerCertificateQueryParams struct {
	Action  PostUntagServerCertificateActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostUntagServerCertificateVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostUntagServerCertificateHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type PostUntagServerCertificateRequest struct {
	QueryParams PostUntagServerCertificateQueryParams
	Headers     PostUntagServerCertificateHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostUntagServerCertificateResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
