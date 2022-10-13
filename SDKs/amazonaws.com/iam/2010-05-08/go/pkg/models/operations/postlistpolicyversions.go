package operations

type PostListPolicyVersionsActionEnum string

const (
	PostListPolicyVersionsActionEnumListPolicyVersions PostListPolicyVersionsActionEnum = "ListPolicyVersions"
)

type PostListPolicyVersionsVersionEnum string

const (
	PostListPolicyVersionsVersionEnumTwoThousandAndTen0508 PostListPolicyVersionsVersionEnum = "2010-05-08"
)

type PostListPolicyVersionsQueryParams struct {
	Action   PostListPolicyVersionsActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Marker   *string                           `queryParam:"style=form,explode=true,name=Marker"`
	MaxItems *string                           `queryParam:"style=form,explode=true,name=MaxItems"`
	Version  PostListPolicyVersionsVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostListPolicyVersionsHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostListPolicyVersionsRequest struct {
	QueryParams PostListPolicyVersionsQueryParams
	Headers     PostListPolicyVersionsHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostListPolicyVersionsResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
