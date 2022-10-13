package operations

type PostAssignPrivateIPAddressesActionEnum string

const (
	PostAssignPrivateIPAddressesActionEnumAssignPrivateIPAddresses PostAssignPrivateIPAddressesActionEnum = "AssignPrivateIpAddresses"
)

type PostAssignPrivateIPAddressesVersionEnum string

const (
	PostAssignPrivateIPAddressesVersionEnumTwoThousandAndSixteen1115 PostAssignPrivateIPAddressesVersionEnum = "2016-11-15"
)

type PostAssignPrivateIPAddressesQueryParams struct {
	Action  PostAssignPrivateIPAddressesActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostAssignPrivateIPAddressesVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostAssignPrivateIPAddressesHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostAssignPrivateIPAddressesRequest struct {
	QueryParams PostAssignPrivateIPAddressesQueryParams
	Headers     PostAssignPrivateIPAddressesHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostAssignPrivateIPAddressesResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
