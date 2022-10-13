package operations

type PostAssociateAddressActionEnum string

const (
	PostAssociateAddressActionEnumAssociateAddress PostAssociateAddressActionEnum = "AssociateAddress"
)

type PostAssociateAddressVersionEnum string

const (
	PostAssociateAddressVersionEnumTwoThousandAndSixteen1115 PostAssociateAddressVersionEnum = "2016-11-15"
)

type PostAssociateAddressQueryParams struct {
	Action  PostAssociateAddressActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostAssociateAddressVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostAssociateAddressHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostAssociateAddressRequest struct {
	QueryParams PostAssociateAddressQueryParams
	Headers     PostAssociateAddressHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostAssociateAddressResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
