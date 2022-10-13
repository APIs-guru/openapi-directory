package operations

type PostListPoliciesActionEnum string

const (
	PostListPoliciesActionEnumListPolicies PostListPoliciesActionEnum = "ListPolicies"
)

type PostListPoliciesVersionEnum string

const (
	PostListPoliciesVersionEnumTwoThousandAndTen0508 PostListPoliciesVersionEnum = "2010-05-08"
)

type PostListPoliciesQueryParams struct {
	Action   PostListPoliciesActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Marker   *string                     `queryParam:"style=form,explode=true,name=Marker"`
	MaxItems *string                     `queryParam:"style=form,explode=true,name=MaxItems"`
	Version  PostListPoliciesVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostListPoliciesHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostListPoliciesRequest struct {
	QueryParams PostListPoliciesQueryParams
	Headers     PostListPoliciesHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostListPoliciesResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
