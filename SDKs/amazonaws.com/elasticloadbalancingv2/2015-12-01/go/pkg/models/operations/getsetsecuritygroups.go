package operations

type GetSetSecurityGroupsActionEnum string

const (
	GetSetSecurityGroupsActionEnumSetSecurityGroups GetSetSecurityGroupsActionEnum = "SetSecurityGroups"
)

type GetSetSecurityGroupsVersionEnum string

const (
	GetSetSecurityGroupsVersionEnumTwoThousandAndFifteen1201 GetSetSecurityGroupsVersionEnum = "2015-12-01"
)

type GetSetSecurityGroupsQueryParams struct {
	Action          GetSetSecurityGroupsActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	LoadBalancerArn string                          `queryParam:"style=form,explode=true,name=LoadBalancerArn"`
	SecurityGroups  []string                        `queryParam:"style=form,explode=true,name=SecurityGroups"`
	Version         GetSetSecurityGroupsVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type GetSetSecurityGroupsHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetSetSecurityGroupsRequest struct {
	QueryParams GetSetSecurityGroupsQueryParams
	Headers     GetSetSecurityGroupsHeaders
}

type GetSetSecurityGroupsResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
