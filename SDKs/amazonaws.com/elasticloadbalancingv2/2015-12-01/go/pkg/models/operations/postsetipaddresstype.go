package operations

type PostSetIPAddressTypeActionEnum string

const (
	PostSetIPAddressTypeActionEnumSetIPAddressType PostSetIPAddressTypeActionEnum = "SetIpAddressType"
)

type PostSetIPAddressTypeVersionEnum string

const (
	PostSetIPAddressTypeVersionEnumTwoThousandAndFifteen1201 PostSetIPAddressTypeVersionEnum = "2015-12-01"
)

type PostSetIPAddressTypeQueryParams struct {
	Action  PostSetIPAddressTypeActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostSetIPAddressTypeVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostSetIPAddressTypeHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostSetIPAddressTypeRequest struct {
	QueryParams PostSetIPAddressTypeQueryParams
	Headers     PostSetIPAddressTypeHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostSetIPAddressTypeResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
