package operations

type PostListAttachedUserPoliciesActionEnum string

const (
	PostListAttachedUserPoliciesActionEnumListAttachedUserPolicies PostListAttachedUserPoliciesActionEnum = "ListAttachedUserPolicies"
)

type PostListAttachedUserPoliciesVersionEnum string

const (
	PostListAttachedUserPoliciesVersionEnumTwoThousandAndTen0508 PostListAttachedUserPoliciesVersionEnum = "2010-05-08"
)

type PostListAttachedUserPoliciesQueryParams struct {
	Action   PostListAttachedUserPoliciesActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Marker   *string                                 `queryParam:"style=form,explode=true,name=Marker"`
	MaxItems *string                                 `queryParam:"style=form,explode=true,name=MaxItems"`
	Version  PostListAttachedUserPoliciesVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostListAttachedUserPoliciesHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostListAttachedUserPoliciesRequest struct {
	QueryParams PostListAttachedUserPoliciesQueryParams
	Headers     PostListAttachedUserPoliciesHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostListAttachedUserPoliciesResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
