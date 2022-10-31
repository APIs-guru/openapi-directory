package operations

type PostListAttachedRolePoliciesActionEnum string

const (
	PostListAttachedRolePoliciesActionEnumListAttachedRolePolicies PostListAttachedRolePoliciesActionEnum = "ListAttachedRolePolicies"
)

type PostListAttachedRolePoliciesVersionEnum string

const (
	PostListAttachedRolePoliciesVersionEnumTwoThousandAndTen0508 PostListAttachedRolePoliciesVersionEnum = "2010-05-08"
)

type PostListAttachedRolePoliciesQueryParams struct {
	Action   PostListAttachedRolePoliciesActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Marker   *string                                 `queryParam:"style=form,explode=true,name=Marker"`
	MaxItems *string                                 `queryParam:"style=form,explode=true,name=MaxItems"`
	Version  PostListAttachedRolePoliciesVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostListAttachedRolePoliciesHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type PostListAttachedRolePoliciesRequest struct {
	QueryParams PostListAttachedRolePoliciesQueryParams
	Headers     PostListAttachedRolePoliciesHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostListAttachedRolePoliciesResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
