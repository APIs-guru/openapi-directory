package operations

type PostDescribeCertificatesActionEnum string

const (
	PostDescribeCertificatesActionEnumDescribeCertificates PostDescribeCertificatesActionEnum = "DescribeCertificates"
)

type PostDescribeCertificatesVersionEnum string

const (
	PostDescribeCertificatesVersionEnumTwoThousandAndFourteen1031 PostDescribeCertificatesVersionEnum = "2014-10-31"
)

type PostDescribeCertificatesQueryParams struct {
	Action     PostDescribeCertificatesActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Marker     *string                             `queryParam:"style=form,explode=true,name=Marker"`
	MaxRecords *string                             `queryParam:"style=form,explode=true,name=MaxRecords"`
	Version    PostDescribeCertificatesVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostDescribeCertificatesHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostDescribeCertificatesRequest struct {
	QueryParams PostDescribeCertificatesQueryParams
	Headers     PostDescribeCertificatesHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostDescribeCertificatesResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
