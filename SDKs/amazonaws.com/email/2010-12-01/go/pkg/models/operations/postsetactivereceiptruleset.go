package operations

type PostSetActiveReceiptRuleSetActionEnum string

const (
	PostSetActiveReceiptRuleSetActionEnumSetActiveReceiptRuleSet PostSetActiveReceiptRuleSetActionEnum = "SetActiveReceiptRuleSet"
)

type PostSetActiveReceiptRuleSetVersionEnum string

const (
	PostSetActiveReceiptRuleSetVersionEnumTwoThousandAndTen1201 PostSetActiveReceiptRuleSetVersionEnum = "2010-12-01"
)

type PostSetActiveReceiptRuleSetQueryParams struct {
	Action  PostSetActiveReceiptRuleSetActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostSetActiveReceiptRuleSetVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostSetActiveReceiptRuleSetHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostSetActiveReceiptRuleSetRequest struct {
	QueryParams PostSetActiveReceiptRuleSetQueryParams
	Headers     PostSetActiveReceiptRuleSetHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostSetActiveReceiptRuleSetResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
