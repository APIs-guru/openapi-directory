package operations

type PostDescribeDomainsActionEnum string

const (
	PostDescribeDomainsActionEnumDescribeDomains PostDescribeDomainsActionEnum = "DescribeDomains"
)

type PostDescribeDomainsVersionEnum string

const (
	PostDescribeDomainsVersionEnumTwoThousandAndThirteen0101 PostDescribeDomainsVersionEnum = "2013-01-01"
)

type PostDescribeDomainsQueryParams struct {
	Action  PostDescribeDomainsActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostDescribeDomainsVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostDescribeDomainsHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type PostDescribeDomainsRequest struct {
	QueryParams PostDescribeDomainsQueryParams
	Headers     PostDescribeDomainsHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostDescribeDomainsResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
