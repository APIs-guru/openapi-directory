package operations

type PostAddListenerCertificatesActionEnum string

const (
	PostAddListenerCertificatesActionEnumAddListenerCertificates PostAddListenerCertificatesActionEnum = "AddListenerCertificates"
)

type PostAddListenerCertificatesVersionEnum string

const (
	PostAddListenerCertificatesVersionEnumTwoThousandAndFifteen1201 PostAddListenerCertificatesVersionEnum = "2015-12-01"
)

type PostAddListenerCertificatesQueryParams struct {
	Action  PostAddListenerCertificatesActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostAddListenerCertificatesVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostAddListenerCertificatesHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostAddListenerCertificatesRequest struct {
	QueryParams PostAddListenerCertificatesQueryParams
	Headers     PostAddListenerCertificatesHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostAddListenerCertificatesResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
