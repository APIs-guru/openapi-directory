package operations

type PostCreateRuleActionEnum string

const (
	PostCreateRuleActionEnumCreateRule PostCreateRuleActionEnum = "CreateRule"
)

type PostCreateRuleVersionEnum string

const (
	PostCreateRuleVersionEnumTwoThousandAndFifteen1201 PostCreateRuleVersionEnum = "2015-12-01"
)

type PostCreateRuleQueryParams struct {
	Action  PostCreateRuleActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostCreateRuleVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostCreateRuleHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostCreateRuleRequest struct {
	QueryParams PostCreateRuleQueryParams
	Headers     PostCreateRuleHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostCreateRuleResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
