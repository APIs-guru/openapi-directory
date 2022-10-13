package operations

type PostListGroupPoliciesActionEnum string

const (
	PostListGroupPoliciesActionEnumListGroupPolicies PostListGroupPoliciesActionEnum = "ListGroupPolicies"
)

type PostListGroupPoliciesVersionEnum string

const (
	PostListGroupPoliciesVersionEnumTwoThousandAndTen0508 PostListGroupPoliciesVersionEnum = "2010-05-08"
)

type PostListGroupPoliciesQueryParams struct {
	Action   PostListGroupPoliciesActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Marker   *string                          `queryParam:"style=form,explode=true,name=Marker"`
	MaxItems *string                          `queryParam:"style=form,explode=true,name=MaxItems"`
	Version  PostListGroupPoliciesVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostListGroupPoliciesHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostListGroupPoliciesRequest struct {
	QueryParams PostListGroupPoliciesQueryParams
	Headers     PostListGroupPoliciesHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostListGroupPoliciesResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
