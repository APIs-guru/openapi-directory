package operations

type PostDescribeDefaultSearchFieldActionEnum string

const (
	PostDescribeDefaultSearchFieldActionEnumDescribeDefaultSearchField PostDescribeDefaultSearchFieldActionEnum = "DescribeDefaultSearchField"
)

type PostDescribeDefaultSearchFieldVersionEnum string

const (
	PostDescribeDefaultSearchFieldVersionEnumTwoThousandAndEleven0201 PostDescribeDefaultSearchFieldVersionEnum = "2011-02-01"
)

type PostDescribeDefaultSearchFieldQueryParams struct {
	Action  PostDescribeDefaultSearchFieldActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostDescribeDefaultSearchFieldVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostDescribeDefaultSearchFieldHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostDescribeDefaultSearchFieldRequest struct {
	QueryParams PostDescribeDefaultSearchFieldQueryParams
	Headers     PostDescribeDefaultSearchFieldHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostDescribeDefaultSearchFieldResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
