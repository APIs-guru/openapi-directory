package operations

type PostDescribeClientVpnAuthorizationRulesActionEnum string

const (
	PostDescribeClientVpnAuthorizationRulesActionEnumDescribeClientVpnAuthorizationRules PostDescribeClientVpnAuthorizationRulesActionEnum = "DescribeClientVpnAuthorizationRules"
)

type PostDescribeClientVpnAuthorizationRulesVersionEnum string

const (
	PostDescribeClientVpnAuthorizationRulesVersionEnumTwoThousandAndSixteen1115 PostDescribeClientVpnAuthorizationRulesVersionEnum = "2016-11-15"
)

type PostDescribeClientVpnAuthorizationRulesQueryParams struct {
	Action     PostDescribeClientVpnAuthorizationRulesActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	MaxResults *string                                            `queryParam:"style=form,explode=true,name=MaxResults"`
	NextToken  *string                                            `queryParam:"style=form,explode=true,name=NextToken"`
	Version    PostDescribeClientVpnAuthorizationRulesVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostDescribeClientVpnAuthorizationRulesHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostDescribeClientVpnAuthorizationRulesRequest struct {
	QueryParams PostDescribeClientVpnAuthorizationRulesQueryParams
	Headers     PostDescribeClientVpnAuthorizationRulesHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostDescribeClientVpnAuthorizationRulesResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
