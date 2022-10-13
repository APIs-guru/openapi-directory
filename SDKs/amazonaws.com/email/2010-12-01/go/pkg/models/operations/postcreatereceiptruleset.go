package operations

type PostCreateReceiptRuleSetActionEnum string

const (
	PostCreateReceiptRuleSetActionEnumCreateReceiptRuleSet PostCreateReceiptRuleSetActionEnum = "CreateReceiptRuleSet"
)

type PostCreateReceiptRuleSetVersionEnum string

const (
	PostCreateReceiptRuleSetVersionEnumTwoThousandAndTen1201 PostCreateReceiptRuleSetVersionEnum = "2010-12-01"
)

type PostCreateReceiptRuleSetQueryParams struct {
	Action  PostCreateReceiptRuleSetActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostCreateReceiptRuleSetVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostCreateReceiptRuleSetHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostCreateReceiptRuleSetRequest struct {
	QueryParams PostCreateReceiptRuleSetQueryParams
	Headers     PostCreateReceiptRuleSetHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostCreateReceiptRuleSetResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
