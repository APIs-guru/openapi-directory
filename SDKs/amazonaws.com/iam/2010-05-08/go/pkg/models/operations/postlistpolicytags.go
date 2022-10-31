package operations

type PostListPolicyTagsActionEnum string

const (
	PostListPolicyTagsActionEnumListPolicyTags PostListPolicyTagsActionEnum = "ListPolicyTags"
)

type PostListPolicyTagsVersionEnum string

const (
	PostListPolicyTagsVersionEnumTwoThousandAndTen0508 PostListPolicyTagsVersionEnum = "2010-05-08"
)

type PostListPolicyTagsQueryParams struct {
	Action  PostListPolicyTagsActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostListPolicyTagsVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostListPolicyTagsHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type PostListPolicyTagsRequest struct {
	QueryParams PostListPolicyTagsQueryParams
	Headers     PostListPolicyTagsHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostListPolicyTagsResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
