package operations

type PostUploadServerCertificateActionEnum string

const (
	PostUploadServerCertificateActionEnumUploadServerCertificate PostUploadServerCertificateActionEnum = "UploadServerCertificate"
)

type PostUploadServerCertificateVersionEnum string

const (
	PostUploadServerCertificateVersionEnumTwoThousandAndTen0508 PostUploadServerCertificateVersionEnum = "2010-05-08"
)

type PostUploadServerCertificateQueryParams struct {
	Action  PostUploadServerCertificateActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostUploadServerCertificateVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostUploadServerCertificateHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostUploadServerCertificateRequest struct {
	QueryParams PostUploadServerCertificateQueryParams
	Headers     PostUploadServerCertificateHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostUploadServerCertificateResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
