package operations

type PostDeleteRuleActionEnum string

const (
	PostDeleteRuleActionEnumDeleteRule PostDeleteRuleActionEnum = "DeleteRule"
)

type PostDeleteRuleVersionEnum string

const (
	PostDeleteRuleVersionEnumTwoThousandAndFifteen1201 PostDeleteRuleVersionEnum = "2015-12-01"
)

type PostDeleteRuleQueryParams struct {
	Action  PostDeleteRuleActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostDeleteRuleVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostDeleteRuleHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type PostDeleteRuleRequest struct {
	QueryParams PostDeleteRuleQueryParams
	Headers     PostDeleteRuleHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostDeleteRuleResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
