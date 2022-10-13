package operations

type PostListRolePoliciesActionEnum string

const (
	PostListRolePoliciesActionEnumListRolePolicies PostListRolePoliciesActionEnum = "ListRolePolicies"
)

type PostListRolePoliciesVersionEnum string

const (
	PostListRolePoliciesVersionEnumTwoThousandAndTen0508 PostListRolePoliciesVersionEnum = "2010-05-08"
)

type PostListRolePoliciesQueryParams struct {
	Action   PostListRolePoliciesActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Marker   *string                         `queryParam:"style=form,explode=true,name=Marker"`
	MaxItems *string                         `queryParam:"style=form,explode=true,name=MaxItems"`
	Version  PostListRolePoliciesVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostListRolePoliciesHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostListRolePoliciesRequest struct {
	QueryParams PostListRolePoliciesQueryParams
	Headers     PostListRolePoliciesHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostListRolePoliciesResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
