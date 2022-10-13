package operations

type GetListReceiptFiltersActionEnum string

const (
	GetListReceiptFiltersActionEnumListReceiptFilters GetListReceiptFiltersActionEnum = "ListReceiptFilters"
)

type GetListReceiptFiltersVersionEnum string

const (
	GetListReceiptFiltersVersionEnumTwoThousandAndTen1201 GetListReceiptFiltersVersionEnum = "2010-12-01"
)

type GetListReceiptFiltersQueryParams struct {
	Action  GetListReceiptFiltersActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version GetListReceiptFiltersVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type GetListReceiptFiltersHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetListReceiptFiltersRequest struct {
	QueryParams GetListReceiptFiltersQueryParams
	Headers     GetListReceiptFiltersHeaders
}

type GetListReceiptFiltersResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
