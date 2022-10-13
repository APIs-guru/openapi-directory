package operations

type PostReorderReceiptRuleSetActionEnum string

const (
	PostReorderReceiptRuleSetActionEnumReorderReceiptRuleSet PostReorderReceiptRuleSetActionEnum = "ReorderReceiptRuleSet"
)

type PostReorderReceiptRuleSetVersionEnum string

const (
	PostReorderReceiptRuleSetVersionEnumTwoThousandAndTen1201 PostReorderReceiptRuleSetVersionEnum = "2010-12-01"
)

type PostReorderReceiptRuleSetQueryParams struct {
	Action  PostReorderReceiptRuleSetActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostReorderReceiptRuleSetVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostReorderReceiptRuleSetHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostReorderReceiptRuleSetRequest struct {
	QueryParams PostReorderReceiptRuleSetQueryParams
	Headers     PostReorderReceiptRuleSetHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostReorderReceiptRuleSetResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
