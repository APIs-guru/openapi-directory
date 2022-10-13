package operations

type PostCloneReceiptRuleSetActionEnum string

const (
	PostCloneReceiptRuleSetActionEnumCloneReceiptRuleSet PostCloneReceiptRuleSetActionEnum = "CloneReceiptRuleSet"
)

type PostCloneReceiptRuleSetVersionEnum string

const (
	PostCloneReceiptRuleSetVersionEnumTwoThousandAndTen1201 PostCloneReceiptRuleSetVersionEnum = "2010-12-01"
)

type PostCloneReceiptRuleSetQueryParams struct {
	Action  PostCloneReceiptRuleSetActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostCloneReceiptRuleSetVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostCloneReceiptRuleSetHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostCloneReceiptRuleSetRequest struct {
	QueryParams PostCloneReceiptRuleSetQueryParams
	Headers     PostCloneReceiptRuleSetHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostCloneReceiptRuleSetResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
