package operations

type GetDescribeRulesActionEnum string

const (
	GetDescribeRulesActionEnumDescribeRules GetDescribeRulesActionEnum = "DescribeRules"
)

type GetDescribeRulesVersionEnum string

const (
	GetDescribeRulesVersionEnumTwoThousandAndFifteen1201 GetDescribeRulesVersionEnum = "2015-12-01"
)

type GetDescribeRulesQueryParams struct {
	Action      GetDescribeRulesActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	ListenerArn *string                     `queryParam:"style=form,explode=true,name=ListenerArn"`
	Marker      *string                     `queryParam:"style=form,explode=true,name=Marker"`
	PageSize    *int64                      `queryParam:"style=form,explode=true,name=PageSize"`
	RuleArns    []string                    `queryParam:"style=form,explode=true,name=RuleArns"`
	Version     GetDescribeRulesVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type GetDescribeRulesHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetDescribeRulesRequest struct {
	QueryParams GetDescribeRulesQueryParams
	Headers     GetDescribeRulesHeaders
}

type GetDescribeRulesResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
