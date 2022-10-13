package operations

type PostListAvailableSolutionStacksActionEnum string

const (
	PostListAvailableSolutionStacksActionEnumListAvailableSolutionStacks PostListAvailableSolutionStacksActionEnum = "ListAvailableSolutionStacks"
)

type PostListAvailableSolutionStacksVersionEnum string

const (
	PostListAvailableSolutionStacksVersionEnumTwoThousandAndTen1201 PostListAvailableSolutionStacksVersionEnum = "2010-12-01"
)

type PostListAvailableSolutionStacksQueryParams struct {
	Action  PostListAvailableSolutionStacksActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostListAvailableSolutionStacksVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostListAvailableSolutionStacksHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostListAvailableSolutionStacksRequest struct {
	QueryParams PostListAvailableSolutionStacksQueryParams
	Headers     PostListAvailableSolutionStacksHeaders
}

type PostListAvailableSolutionStacksResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
