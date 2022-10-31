package operations

type PostCreateTagsActionEnum string

const (
	PostCreateTagsActionEnumCreateTags PostCreateTagsActionEnum = "CreateTags"
)

type PostCreateTagsVersionEnum string

const (
	PostCreateTagsVersionEnumTwoThousandAndSixteen1115 PostCreateTagsVersionEnum = "2016-11-15"
)

type PostCreateTagsQueryParams struct {
	Action  PostCreateTagsActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostCreateTagsVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostCreateTagsHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type PostCreateTagsRequest struct {
	QueryParams PostCreateTagsQueryParams
	Headers     PostCreateTagsHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostCreateTagsResponse struct {
	ContentType string
	StatusCode  int64
}
