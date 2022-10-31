package operations

type PostListMfaDeviceTagsActionEnum string

const (
	PostListMfaDeviceTagsActionEnumListMfaDeviceTags PostListMfaDeviceTagsActionEnum = "ListMFADeviceTags"
)

type PostListMfaDeviceTagsVersionEnum string

const (
	PostListMfaDeviceTagsVersionEnumTwoThousandAndTen0508 PostListMfaDeviceTagsVersionEnum = "2010-05-08"
)

type PostListMfaDeviceTagsQueryParams struct {
	Action  PostListMfaDeviceTagsActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostListMfaDeviceTagsVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostListMfaDeviceTagsHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type PostListMfaDeviceTagsRequest struct {
	QueryParams PostListMfaDeviceTagsQueryParams
	Headers     PostListMfaDeviceTagsHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostListMfaDeviceTagsResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
