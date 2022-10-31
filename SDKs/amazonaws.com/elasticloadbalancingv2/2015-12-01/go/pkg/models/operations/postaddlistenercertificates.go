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
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
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
