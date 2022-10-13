package operations

type GetDeleteRuleActionEnum string

const (
	GetDeleteRuleActionEnumDeleteRule GetDeleteRuleActionEnum = "DeleteRule"
)

type GetDeleteRuleVersionEnum string

const (
	GetDeleteRuleVersionEnumTwoThousandAndFifteen1201 GetDeleteRuleVersionEnum = "2015-12-01"
)

type GetDeleteRuleQueryParams struct {
	Action  GetDeleteRuleActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	RuleArn string                   `queryParam:"style=form,explode=true,name=RuleArn"`
	Version GetDeleteRuleVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type GetDeleteRuleHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetDeleteRuleRequest struct {
	QueryParams GetDeleteRuleQueryParams
	Headers     GetDeleteRuleHeaders
}

type GetDeleteRuleResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
