package operations

type PostDisassociateClientVpnTargetNetworkActionEnum string

const (
	PostDisassociateClientVpnTargetNetworkActionEnumDisassociateClientVpnTargetNetwork PostDisassociateClientVpnTargetNetworkActionEnum = "DisassociateClientVpnTargetNetwork"
)

type PostDisassociateClientVpnTargetNetworkVersionEnum string

const (
	PostDisassociateClientVpnTargetNetworkVersionEnumTwoThousandAndSixteen1115 PostDisassociateClientVpnTargetNetworkVersionEnum = "2016-11-15"
)

type PostDisassociateClientVpnTargetNetworkQueryParams struct {
	Action  PostDisassociateClientVpnTargetNetworkActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostDisassociateClientVpnTargetNetworkVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostDisassociateClientVpnTargetNetworkHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostDisassociateClientVpnTargetNetworkRequest struct {
	QueryParams PostDisassociateClientVpnTargetNetworkQueryParams
	Headers     PostDisassociateClientVpnTargetNetworkHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostDisassociateClientVpnTargetNetworkResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
