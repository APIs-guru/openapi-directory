package operations

type PostAssociateClientVpnTargetNetworkActionEnum string

const (
	PostAssociateClientVpnTargetNetworkActionEnumAssociateClientVpnTargetNetwork PostAssociateClientVpnTargetNetworkActionEnum = "AssociateClientVpnTargetNetwork"
)

type PostAssociateClientVpnTargetNetworkVersionEnum string

const (
	PostAssociateClientVpnTargetNetworkVersionEnumTwoThousandAndSixteen1115 PostAssociateClientVpnTargetNetworkVersionEnum = "2016-11-15"
)

type PostAssociateClientVpnTargetNetworkQueryParams struct {
	Action  PostAssociateClientVpnTargetNetworkActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostAssociateClientVpnTargetNetworkVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostAssociateClientVpnTargetNetworkHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostAssociateClientVpnTargetNetworkRequest struct {
	QueryParams PostAssociateClientVpnTargetNetworkQueryParams
	Headers     PostAssociateClientVpnTargetNetworkHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostAssociateClientVpnTargetNetworkResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
