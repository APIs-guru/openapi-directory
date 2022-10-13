package operations

type PostListAttachedGroupPoliciesActionEnum string

const (
	PostListAttachedGroupPoliciesActionEnumListAttachedGroupPolicies PostListAttachedGroupPoliciesActionEnum = "ListAttachedGroupPolicies"
)

type PostListAttachedGroupPoliciesVersionEnum string

const (
	PostListAttachedGroupPoliciesVersionEnumTwoThousandAndTen0508 PostListAttachedGroupPoliciesVersionEnum = "2010-05-08"
)

type PostListAttachedGroupPoliciesQueryParams struct {
	Action   PostListAttachedGroupPoliciesActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Marker   *string                                  `queryParam:"style=form,explode=true,name=Marker"`
	MaxItems *string                                  `queryParam:"style=form,explode=true,name=MaxItems"`
	Version  PostListAttachedGroupPoliciesVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostListAttachedGroupPoliciesHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostListAttachedGroupPoliciesRequest struct {
	QueryParams PostListAttachedGroupPoliciesQueryParams
	Headers     PostListAttachedGroupPoliciesHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostListAttachedGroupPoliciesResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
