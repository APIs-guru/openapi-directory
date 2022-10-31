package operations

type GetRevokeClientVpnIngressActionEnum string

const (
	GetRevokeClientVpnIngressActionEnumRevokeClientVpnIngress GetRevokeClientVpnIngressActionEnum = "RevokeClientVpnIngress"
)

type GetRevokeClientVpnIngressVersionEnum string

const (
	GetRevokeClientVpnIngressVersionEnumTwoThousandAndSixteen1115 GetRevokeClientVpnIngressVersionEnum = "2016-11-15"
)

type GetRevokeClientVpnIngressQueryParams struct {
	AccessGroupID       *string                              `queryParam:"style=form,explode=true,name=AccessGroupId"`
	Action              GetRevokeClientVpnIngressActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	ClientVpnEndpointID string                               `queryParam:"style=form,explode=true,name=ClientVpnEndpointId"`
	DryRun              *bool                                `queryParam:"style=form,explode=true,name=DryRun"`
	RevokeAllGroups     *bool                                `queryParam:"style=form,explode=true,name=RevokeAllGroups"`
	TargetNetworkCidr   string                               `queryParam:"style=form,explode=true,name=TargetNetworkCidr"`
	Version             GetRevokeClientVpnIngressVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type GetRevokeClientVpnIngressHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type GetRevokeClientVpnIngressRequest struct {
	QueryParams GetRevokeClientVpnIngressQueryParams
	Headers     GetRevokeClientVpnIngressHeaders
}

type GetRevokeClientVpnIngressResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
