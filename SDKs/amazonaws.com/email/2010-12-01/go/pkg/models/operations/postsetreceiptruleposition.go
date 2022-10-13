package operations

type PostSetReceiptRulePositionActionEnum string

const (
	PostSetReceiptRulePositionActionEnumSetReceiptRulePosition PostSetReceiptRulePositionActionEnum = "SetReceiptRulePosition"
)

type PostSetReceiptRulePositionVersionEnum string

const (
	PostSetReceiptRulePositionVersionEnumTwoThousandAndTen1201 PostSetReceiptRulePositionVersionEnum = "2010-12-01"
)

type PostSetReceiptRulePositionQueryParams struct {
	Action  PostSetReceiptRulePositionActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostSetReceiptRulePositionVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostSetReceiptRulePositionHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostSetReceiptRulePositionRequest struct {
	QueryParams PostSetReceiptRulePositionQueryParams
	Headers     PostSetReceiptRulePositionHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostSetReceiptRulePositionResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
