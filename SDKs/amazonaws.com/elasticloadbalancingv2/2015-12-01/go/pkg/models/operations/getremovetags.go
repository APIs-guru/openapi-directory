package operations

type GetRemoveTagsActionEnum string

const (
	GetRemoveTagsActionEnumRemoveTags GetRemoveTagsActionEnum = "RemoveTags"
)

type GetRemoveTagsVersionEnum string

const (
	GetRemoveTagsVersionEnumTwoThousandAndFifteen1201 GetRemoveTagsVersionEnum = "2015-12-01"
)

type GetRemoveTagsQueryParams struct {
	Action       GetRemoveTagsActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	ResourceArns []string                 `queryParam:"style=form,explode=true,name=ResourceArns"`
	TagKeys      []string                 `queryParam:"style=form,explode=true,name=TagKeys"`
	Version      GetRemoveTagsVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type GetRemoveTagsHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type GetRemoveTagsRequest struct {
	QueryParams GetRemoveTagsQueryParams
	Headers     GetRemoveTagsHeaders
}

type GetRemoveTagsResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
