package operations

type PostCreateStorageLocationActionEnum string

const (
	PostCreateStorageLocationActionEnumCreateStorageLocation PostCreateStorageLocationActionEnum = "CreateStorageLocation"
)

type PostCreateStorageLocationVersionEnum string

const (
	PostCreateStorageLocationVersionEnumTwoThousandAndTen1201 PostCreateStorageLocationVersionEnum = "2010-12-01"
)

type PostCreateStorageLocationQueryParams struct {
	Action  PostCreateStorageLocationActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostCreateStorageLocationVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostCreateStorageLocationHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostCreateStorageLocationRequest struct {
	QueryParams PostCreateStorageLocationQueryParams
	Headers     PostCreateStorageLocationHeaders
}

type PostCreateStorageLocationResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
