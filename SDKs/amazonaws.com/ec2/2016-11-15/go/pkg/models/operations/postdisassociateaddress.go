package operations

type PostDisassociateAddressActionEnum string

const (
	PostDisassociateAddressActionEnumDisassociateAddress PostDisassociateAddressActionEnum = "DisassociateAddress"
)

type PostDisassociateAddressVersionEnum string

const (
	PostDisassociateAddressVersionEnumTwoThousandAndSixteen1115 PostDisassociateAddressVersionEnum = "2016-11-15"
)

type PostDisassociateAddressQueryParams struct {
	Action  PostDisassociateAddressActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostDisassociateAddressVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostDisassociateAddressHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type PostDisassociateAddressRequest struct {
	QueryParams PostDisassociateAddressQueryParams
	Headers     PostDisassociateAddressHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostDisassociateAddressResponse struct {
	ContentType string
	StatusCode  int64
}
