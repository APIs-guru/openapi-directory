package operations

type GetCreateStorageLocationActionEnum string

const (
	GetCreateStorageLocationActionEnumCreateStorageLocation GetCreateStorageLocationActionEnum = "CreateStorageLocation"
)

type GetCreateStorageLocationVersionEnum string

const (
	GetCreateStorageLocationVersionEnumTwoThousandAndTen1201 GetCreateStorageLocationVersionEnum = "2010-12-01"
)

type GetCreateStorageLocationQueryParams struct {
	Action  GetCreateStorageLocationActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version GetCreateStorageLocationVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type GetCreateStorageLocationHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetCreateStorageLocationRequest struct {
	QueryParams GetCreateStorageLocationQueryParams
	Headers     GetCreateStorageLocationHeaders
}

type GetCreateStorageLocationResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
