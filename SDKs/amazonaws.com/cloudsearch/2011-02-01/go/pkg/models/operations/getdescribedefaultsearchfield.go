package operations

type GetDescribeDefaultSearchFieldActionEnum string

const (
	GetDescribeDefaultSearchFieldActionEnumDescribeDefaultSearchField GetDescribeDefaultSearchFieldActionEnum = "DescribeDefaultSearchField"
)

type GetDescribeDefaultSearchFieldVersionEnum string

const (
	GetDescribeDefaultSearchFieldVersionEnumTwoThousandAndEleven0201 GetDescribeDefaultSearchFieldVersionEnum = "2011-02-01"
)

type GetDescribeDefaultSearchFieldQueryParams struct {
	Action     GetDescribeDefaultSearchFieldActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	DomainName string                                   `queryParam:"style=form,explode=true,name=DomainName"`
	Version    GetDescribeDefaultSearchFieldVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type GetDescribeDefaultSearchFieldHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetDescribeDefaultSearchFieldRequest struct {
	QueryParams GetDescribeDefaultSearchFieldQueryParams
	Headers     GetDescribeDefaultSearchFieldHeaders
}

type GetDescribeDefaultSearchFieldResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
