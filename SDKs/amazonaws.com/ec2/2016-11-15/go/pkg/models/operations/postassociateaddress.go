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
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
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
