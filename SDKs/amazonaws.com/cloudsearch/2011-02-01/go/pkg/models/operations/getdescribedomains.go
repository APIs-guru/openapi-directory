package operations

type GetDescribeDomainsActionEnum string

const (
	GetDescribeDomainsActionEnumDescribeDomains GetDescribeDomainsActionEnum = "DescribeDomains"
)

type GetDescribeDomainsVersionEnum string

const (
	GetDescribeDomainsVersionEnumTwoThousandAndEleven0201 GetDescribeDomainsVersionEnum = "2011-02-01"
)

type GetDescribeDomainsQueryParams struct {
	Action      GetDescribeDomainsActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	DomainNames []string                      `queryParam:"style=form,explode=true,name=DomainNames"`
	Version     GetDescribeDomainsVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type GetDescribeDomainsHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetDescribeDomainsRequest struct {
	QueryParams GetDescribeDomainsQueryParams
	Headers     GetDescribeDomainsHeaders
}

type GetDescribeDomainsResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
