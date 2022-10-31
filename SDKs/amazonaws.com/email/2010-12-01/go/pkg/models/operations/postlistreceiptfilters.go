package operations

type PostListReceiptFiltersActionEnum string

const (
	PostListReceiptFiltersActionEnumListReceiptFilters PostListReceiptFiltersActionEnum = "ListReceiptFilters"
)

type PostListReceiptFiltersVersionEnum string

const (
	PostListReceiptFiltersVersionEnumTwoThousandAndTen1201 PostListReceiptFiltersVersionEnum = "2010-12-01"
)

type PostListReceiptFiltersQueryParams struct {
	Action  PostListReceiptFiltersActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostListReceiptFiltersVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostListReceiptFiltersHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type PostListReceiptFiltersRequest struct {
	QueryParams PostListReceiptFiltersQueryParams
	Headers     PostListReceiptFiltersHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostListReceiptFiltersResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
