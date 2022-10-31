package operations

type GetListTagsForResourceActionEnum string

const (
	GetListTagsForResourceActionEnumListTagsForResource GetListTagsForResourceActionEnum = "ListTagsForResource"
)

type GetListTagsForResourceVersionEnum string

const (
	GetListTagsForResourceVersionEnumTwoThousandAndFifteen0202 GetListTagsForResourceVersionEnum = "2015-02-02"
)

type GetListTagsForResourceQueryParams struct {
	Action       GetListTagsForResourceActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	ResourceName string                            `queryParam:"style=form,explode=true,name=ResourceName"`
	Version      GetListTagsForResourceVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type GetListTagsForResourceHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type GetListTagsForResourceRequest struct {
	QueryParams GetListTagsForResourceQueryParams
	Headers     GetListTagsForResourceHeaders
}

type GetListTagsForResourceResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
