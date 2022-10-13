package operations

type PostRemoveTagsActionEnum string

const (
	PostRemoveTagsActionEnumRemoveTags PostRemoveTagsActionEnum = "RemoveTags"
)

type PostRemoveTagsVersionEnum string

const (
	PostRemoveTagsVersionEnumTwoThousandAndFifteen1201 PostRemoveTagsVersionEnum = "2015-12-01"
)

type PostRemoveTagsQueryParams struct {
	Action  PostRemoveTagsActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostRemoveTagsVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostRemoveTagsHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostRemoveTagsRequest struct {
	QueryParams PostRemoveTagsQueryParams
	Headers     PostRemoveTagsHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostRemoveTagsResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
