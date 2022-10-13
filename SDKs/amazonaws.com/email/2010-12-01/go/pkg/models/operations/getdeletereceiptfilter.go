package operations

type GetDeleteReceiptFilterActionEnum string

const (
	GetDeleteReceiptFilterActionEnumDeleteReceiptFilter GetDeleteReceiptFilterActionEnum = "DeleteReceiptFilter"
)

type GetDeleteReceiptFilterVersionEnum string

const (
	GetDeleteReceiptFilterVersionEnumTwoThousandAndTen1201 GetDeleteReceiptFilterVersionEnum = "2010-12-01"
)

type GetDeleteReceiptFilterQueryParams struct {
	Action     GetDeleteReceiptFilterActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	FilterName string                            `queryParam:"style=form,explode=true,name=FilterName"`
	Version    GetDeleteReceiptFilterVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type GetDeleteReceiptFilterHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetDeleteReceiptFilterRequest struct {
	QueryParams GetDeleteReceiptFilterQueryParams
	Headers     GetDeleteReceiptFilterHeaders
}

type GetDeleteReceiptFilterResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
