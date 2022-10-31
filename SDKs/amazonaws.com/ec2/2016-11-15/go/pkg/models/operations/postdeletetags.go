package operations

type PostDeleteTagsActionEnum string

const (
	PostDeleteTagsActionEnumDeleteTags PostDeleteTagsActionEnum = "DeleteTags"
)

type PostDeleteTagsVersionEnum string

const (
	PostDeleteTagsVersionEnumTwoThousandAndSixteen1115 PostDeleteTagsVersionEnum = "2016-11-15"
)

type PostDeleteTagsQueryParams struct {
	Action  PostDeleteTagsActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostDeleteTagsVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostDeleteTagsHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type PostDeleteTagsRequest struct {
	QueryParams PostDeleteTagsQueryParams
	Headers     PostDeleteTagsHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostDeleteTagsResponse struct {
	ContentType string
	StatusCode  int64
}
