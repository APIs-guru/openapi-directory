package operations

type PostUnassignPrivateIPAddressesActionEnum string

const (
	PostUnassignPrivateIPAddressesActionEnumUnassignPrivateIPAddresses PostUnassignPrivateIPAddressesActionEnum = "UnassignPrivateIpAddresses"
)

type PostUnassignPrivateIPAddressesVersionEnum string

const (
	PostUnassignPrivateIPAddressesVersionEnumTwoThousandAndSixteen1115 PostUnassignPrivateIPAddressesVersionEnum = "2016-11-15"
)

type PostUnassignPrivateIPAddressesQueryParams struct {
	Action  PostUnassignPrivateIPAddressesActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostUnassignPrivateIPAddressesVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostUnassignPrivateIPAddressesHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type PostUnassignPrivateIPAddressesRequest struct {
	QueryParams PostUnassignPrivateIPAddressesQueryParams
	Headers     PostUnassignPrivateIPAddressesHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostUnassignPrivateIPAddressesResponse struct {
	ContentType string
	StatusCode  int64
}
