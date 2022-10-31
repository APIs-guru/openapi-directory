package operations

type PostListIdentityPoliciesActionEnum string

const (
	PostListIdentityPoliciesActionEnumListIdentityPolicies PostListIdentityPoliciesActionEnum = "ListIdentityPolicies"
)

type PostListIdentityPoliciesVersionEnum string

const (
	PostListIdentityPoliciesVersionEnumTwoThousandAndTen1201 PostListIdentityPoliciesVersionEnum = "2010-12-01"
)

type PostListIdentityPoliciesQueryParams struct {
	Action  PostListIdentityPoliciesActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostListIdentityPoliciesVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostListIdentityPoliciesHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type PostListIdentityPoliciesRequest struct {
	QueryParams PostListIdentityPoliciesQueryParams
	Headers     PostListIdentityPoliciesHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostListIdentityPoliciesResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
