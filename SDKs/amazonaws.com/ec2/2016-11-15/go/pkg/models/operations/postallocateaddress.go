package operations

type PostAllocateAddressActionEnum string

const (
	PostAllocateAddressActionEnumAllocateAddress PostAllocateAddressActionEnum = "AllocateAddress"
)

type PostAllocateAddressVersionEnum string

const (
	PostAllocateAddressVersionEnumTwoThousandAndSixteen1115 PostAllocateAddressVersionEnum = "2016-11-15"
)

type PostAllocateAddressQueryParams struct {
	Action  PostAllocateAddressActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostAllocateAddressVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostAllocateAddressHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostAllocateAddressRequest struct {
	QueryParams PostAllocateAddressQueryParams
	Headers     PostAllocateAddressHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostAllocateAddressResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
