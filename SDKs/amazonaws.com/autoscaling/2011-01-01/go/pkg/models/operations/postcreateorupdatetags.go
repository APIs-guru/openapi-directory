package operations

type PostCreateOrUpdateTagsActionEnum string

const (
	PostCreateOrUpdateTagsActionEnumCreateOrUpdateTags PostCreateOrUpdateTagsActionEnum = "CreateOrUpdateTags"
)

type PostCreateOrUpdateTagsVersionEnum string

const (
	PostCreateOrUpdateTagsVersionEnumTwoThousandAndEleven0101 PostCreateOrUpdateTagsVersionEnum = "2011-01-01"
)

type PostCreateOrUpdateTagsQueryParams struct {
	Action  PostCreateOrUpdateTagsActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostCreateOrUpdateTagsVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostCreateOrUpdateTagsHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostCreateOrUpdateTagsRequest struct {
	QueryParams PostCreateOrUpdateTagsQueryParams
	Headers     PostCreateOrUpdateTagsHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostCreateOrUpdateTagsResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
