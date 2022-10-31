package operations

type PostUpdateTagsForResourceActionEnum string

const (
	PostUpdateTagsForResourceActionEnumUpdateTagsForResource PostUpdateTagsForResourceActionEnum = "UpdateTagsForResource"
)

type PostUpdateTagsForResourceVersionEnum string

const (
	PostUpdateTagsForResourceVersionEnumTwoThousandAndTen1201 PostUpdateTagsForResourceVersionEnum = "2010-12-01"
)

type PostUpdateTagsForResourceQueryParams struct {
	Action  PostUpdateTagsForResourceActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostUpdateTagsForResourceVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostUpdateTagsForResourceHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type PostUpdateTagsForResourceRequest struct {
	QueryParams PostUpdateTagsForResourceQueryParams
	Headers     PostUpdateTagsForResourceHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostUpdateTagsForResourceResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
