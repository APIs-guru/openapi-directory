package operations

type PostModifySecurityGroupRulesActionEnum string

const (
	PostModifySecurityGroupRulesActionEnumModifySecurityGroupRules PostModifySecurityGroupRulesActionEnum = "ModifySecurityGroupRules"
)

type PostModifySecurityGroupRulesVersionEnum string

const (
	PostModifySecurityGroupRulesVersionEnumTwoThousandAndSixteen1115 PostModifySecurityGroupRulesVersionEnum = "2016-11-15"
)

type PostModifySecurityGroupRulesQueryParams struct {
	Action  PostModifySecurityGroupRulesActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostModifySecurityGroupRulesVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostModifySecurityGroupRulesHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostModifySecurityGroupRulesRequest struct {
	QueryParams PostModifySecurityGroupRulesQueryParams
	Headers     PostModifySecurityGroupRulesHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostModifySecurityGroupRulesResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
