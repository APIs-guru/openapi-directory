package operations

type PostDescribeSecurityGroupRulesActionEnum string

const (
	PostDescribeSecurityGroupRulesActionEnumDescribeSecurityGroupRules PostDescribeSecurityGroupRulesActionEnum = "DescribeSecurityGroupRules"
)

type PostDescribeSecurityGroupRulesVersionEnum string

const (
	PostDescribeSecurityGroupRulesVersionEnumTwoThousandAndSixteen1115 PostDescribeSecurityGroupRulesVersionEnum = "2016-11-15"
)

type PostDescribeSecurityGroupRulesQueryParams struct {
	Action     PostDescribeSecurityGroupRulesActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	MaxResults *string                                   `queryParam:"style=form,explode=true,name=MaxResults"`
	NextToken  *string                                   `queryParam:"style=form,explode=true,name=NextToken"`
	Version    PostDescribeSecurityGroupRulesVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostDescribeSecurityGroupRulesHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostDescribeSecurityGroupRulesRequest struct {
	QueryParams PostDescribeSecurityGroupRulesQueryParams
	Headers     PostDescribeSecurityGroupRulesHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostDescribeSecurityGroupRulesResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
