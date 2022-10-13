package operations

type PostListVirtualMfaDevicesActionEnum string

const (
	PostListVirtualMfaDevicesActionEnumListVirtualMfaDevices PostListVirtualMfaDevicesActionEnum = "ListVirtualMFADevices"
)

type PostListVirtualMfaDevicesVersionEnum string

const (
	PostListVirtualMfaDevicesVersionEnumTwoThousandAndTen0508 PostListVirtualMfaDevicesVersionEnum = "2010-05-08"
)

type PostListVirtualMfaDevicesQueryParams struct {
	Action   PostListVirtualMfaDevicesActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Marker   *string                              `queryParam:"style=form,explode=true,name=Marker"`
	MaxItems *string                              `queryParam:"style=form,explode=true,name=MaxItems"`
	Version  PostListVirtualMfaDevicesVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostListVirtualMfaDevicesHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostListVirtualMfaDevicesRequest struct {
	QueryParams PostListVirtualMfaDevicesQueryParams
	Headers     PostListVirtualMfaDevicesHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostListVirtualMfaDevicesResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
