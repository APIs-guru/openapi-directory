package operations

type PostUpdateSecurityGroupRuleDescriptionsEgressActionEnum string

const (
	PostUpdateSecurityGroupRuleDescriptionsEgressActionEnumUpdateSecurityGroupRuleDescriptionsEgress PostUpdateSecurityGroupRuleDescriptionsEgressActionEnum = "UpdateSecurityGroupRuleDescriptionsEgress"
)

type PostUpdateSecurityGroupRuleDescriptionsEgressVersionEnum string

const (
	PostUpdateSecurityGroupRuleDescriptionsEgressVersionEnumTwoThousandAndSixteen1115 PostUpdateSecurityGroupRuleDescriptionsEgressVersionEnum = "2016-11-15"
)

type PostUpdateSecurityGroupRuleDescriptionsEgressQueryParams struct {
	Action  PostUpdateSecurityGroupRuleDescriptionsEgressActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostUpdateSecurityGroupRuleDescriptionsEgressVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostUpdateSecurityGroupRuleDescriptionsEgressHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostUpdateSecurityGroupRuleDescriptionsEgressRequest struct {
	QueryParams PostUpdateSecurityGroupRuleDescriptionsEgressQueryParams
	Headers     PostUpdateSecurityGroupRuleDescriptionsEgressHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostUpdateSecurityGroupRuleDescriptionsEgressResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
