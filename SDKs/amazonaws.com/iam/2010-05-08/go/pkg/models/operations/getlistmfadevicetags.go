package operations

type GetListMfaDeviceTagsActionEnum string

const (
	GetListMfaDeviceTagsActionEnumListMfaDeviceTags GetListMfaDeviceTagsActionEnum = "ListMFADeviceTags"
)

type GetListMfaDeviceTagsVersionEnum string

const (
	GetListMfaDeviceTagsVersionEnumTwoThousandAndTen0508 GetListMfaDeviceTagsVersionEnum = "2010-05-08"
)

type GetListMfaDeviceTagsQueryParams struct {
	Action       GetListMfaDeviceTagsActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Marker       *string                         `queryParam:"style=form,explode=true,name=Marker"`
	MaxItems     *int64                          `queryParam:"style=form,explode=true,name=MaxItems"`
	SerialNumber string                          `queryParam:"style=form,explode=true,name=SerialNumber"`
	Version      GetListMfaDeviceTagsVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type GetListMfaDeviceTagsHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetListMfaDeviceTagsRequest struct {
	QueryParams GetListMfaDeviceTagsQueryParams
	Headers     GetListMfaDeviceTagsHeaders
}

type GetListMfaDeviceTagsResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
