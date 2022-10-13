package operations

type PostSetSecurityGroupsActionEnum string

const (
	PostSetSecurityGroupsActionEnumSetSecurityGroups PostSetSecurityGroupsActionEnum = "SetSecurityGroups"
)

type PostSetSecurityGroupsVersionEnum string

const (
	PostSetSecurityGroupsVersionEnumTwoThousandAndFifteen1201 PostSetSecurityGroupsVersionEnum = "2015-12-01"
)

type PostSetSecurityGroupsQueryParams struct {
	Action  PostSetSecurityGroupsActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostSetSecurityGroupsVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostSetSecurityGroupsHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostSetSecurityGroupsRequest struct {
	QueryParams PostSetSecurityGroupsQueryParams
	Headers     PostSetSecurityGroupsHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostSetSecurityGroupsResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
