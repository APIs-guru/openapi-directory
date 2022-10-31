package operations

type GetApplySecurityGroupsToClientVpnTargetNetworkActionEnum string

const (
	GetApplySecurityGroupsToClientVpnTargetNetworkActionEnumApplySecurityGroupsToClientVpnTargetNetwork GetApplySecurityGroupsToClientVpnTargetNetworkActionEnum = "ApplySecurityGroupsToClientVpnTargetNetwork"
)

type GetApplySecurityGroupsToClientVpnTargetNetworkVersionEnum string

const (
	GetApplySecurityGroupsToClientVpnTargetNetworkVersionEnumTwoThousandAndSixteen1115 GetApplySecurityGroupsToClientVpnTargetNetworkVersionEnum = "2016-11-15"
)

type GetApplySecurityGroupsToClientVpnTargetNetworkQueryParams struct {
	Action              GetApplySecurityGroupsToClientVpnTargetNetworkActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	ClientVpnEndpointID string                                                    `queryParam:"style=form,explode=true,name=ClientVpnEndpointId"`
	DryRun              *bool                                                     `queryParam:"style=form,explode=true,name=DryRun"`
	SecurityGroupID     []string                                                  `queryParam:"style=form,explode=true,name=SecurityGroupId"`
	Version             GetApplySecurityGroupsToClientVpnTargetNetworkVersionEnum `queryParam:"style=form,explode=true,name=Version"`
	VpcID               string                                                    `queryParam:"style=form,explode=true,name=VpcId"`
}

type GetApplySecurityGroupsToClientVpnTargetNetworkHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type GetApplySecurityGroupsToClientVpnTargetNetworkRequest struct {
	QueryParams GetApplySecurityGroupsToClientVpnTargetNetworkQueryParams
	Headers     GetApplySecurityGroupsToClientVpnTargetNetworkHeaders
}

type GetApplySecurityGroupsToClientVpnTargetNetworkResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
