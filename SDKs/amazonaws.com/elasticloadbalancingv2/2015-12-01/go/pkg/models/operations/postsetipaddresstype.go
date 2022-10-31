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
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
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
