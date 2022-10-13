package operations

type GetAssociateClientVpnTargetNetworkActionEnum string

const (
	GetAssociateClientVpnTargetNetworkActionEnumAssociateClientVpnTargetNetwork GetAssociateClientVpnTargetNetworkActionEnum = "AssociateClientVpnTargetNetwork"
)

type GetAssociateClientVpnTargetNetworkVersionEnum string

const (
	GetAssociateClientVpnTargetNetworkVersionEnumTwoThousandAndSixteen1115 GetAssociateClientVpnTargetNetworkVersionEnum = "2016-11-15"
)

type GetAssociateClientVpnTargetNetworkQueryParams struct {
	Action              GetAssociateClientVpnTargetNetworkActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	ClientToken         *string                                       `queryParam:"style=form,explode=true,name=ClientToken"`
	ClientVpnEndpointID string                                        `queryParam:"style=form,explode=true,name=ClientVpnEndpointId"`
	DryRun              *bool                                         `queryParam:"style=form,explode=true,name=DryRun"`
	SubnetID            string                                        `queryParam:"style=form,explode=true,name=SubnetId"`
	Version             GetAssociateClientVpnTargetNetworkVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type GetAssociateClientVpnTargetNetworkHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetAssociateClientVpnTargetNetworkRequest struct {
	QueryParams GetAssociateClientVpnTargetNetworkQueryParams
	Headers     GetAssociateClientVpnTargetNetworkHeaders
}

type GetAssociateClientVpnTargetNetworkResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
