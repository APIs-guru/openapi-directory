package operations

type GetDisassociateClientVpnTargetNetworkActionEnum string

const (
	GetDisassociateClientVpnTargetNetworkActionEnumDisassociateClientVpnTargetNetwork GetDisassociateClientVpnTargetNetworkActionEnum = "DisassociateClientVpnTargetNetwork"
)

type GetDisassociateClientVpnTargetNetworkVersionEnum string

const (
	GetDisassociateClientVpnTargetNetworkVersionEnumTwoThousandAndSixteen1115 GetDisassociateClientVpnTargetNetworkVersionEnum = "2016-11-15"
)

type GetDisassociateClientVpnTargetNetworkQueryParams struct {
	Action              GetDisassociateClientVpnTargetNetworkActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	AssociationID       string                                           `queryParam:"style=form,explode=true,name=AssociationId"`
	ClientVpnEndpointID string                                           `queryParam:"style=form,explode=true,name=ClientVpnEndpointId"`
	DryRun              *bool                                            `queryParam:"style=form,explode=true,name=DryRun"`
	Version             GetDisassociateClientVpnTargetNetworkVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type GetDisassociateClientVpnTargetNetworkHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetDisassociateClientVpnTargetNetworkRequest struct {
	QueryParams GetDisassociateClientVpnTargetNetworkQueryParams
	Headers     GetDisassociateClientVpnTargetNetworkHeaders
}

type GetDisassociateClientVpnTargetNetworkResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
