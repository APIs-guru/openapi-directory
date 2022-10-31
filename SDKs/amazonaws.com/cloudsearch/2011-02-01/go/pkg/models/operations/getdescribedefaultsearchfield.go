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
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
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
