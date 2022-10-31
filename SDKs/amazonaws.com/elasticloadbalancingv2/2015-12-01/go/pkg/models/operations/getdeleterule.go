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
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
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
