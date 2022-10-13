package operations

type GetModifyClientVpnEndpointActionEnum string

const (
	GetModifyClientVpnEndpointActionEnumModifyClientVpnEndpoint GetModifyClientVpnEndpointActionEnum = "ModifyClientVpnEndpoint"
)

type GetModifyClientVpnEndpointClientConnectOptions struct {
	Enabled           *bool   `queryParam:"name=Enabled"`
	LambdaFunctionArn *string `queryParam:"name=LambdaFunctionArn"`
}

type GetModifyClientVpnEndpointConnectionLogOptions struct {
	CloudwatchLogGroup  *string `queryParam:"name=CloudwatchLogGroup"`
	CloudwatchLogStream *string `queryParam:"name=CloudwatchLogStream"`
	Enabled             *bool   `queryParam:"name=Enabled"`
}

type GetModifyClientVpnEndpointDNSServers struct {
	CustomDNSServers []string `queryParam:"name=CustomDnsServers"`
	Enabled          *bool    `queryParam:"name=Enabled"`
}

type GetModifyClientVpnEndpointSelfServicePortalEnum string

const (
	GetModifyClientVpnEndpointSelfServicePortalEnumEnabled  GetModifyClientVpnEndpointSelfServicePortalEnum = "enabled"
	GetModifyClientVpnEndpointSelfServicePortalEnumDisabled GetModifyClientVpnEndpointSelfServicePortalEnum = "disabled"
)

type GetModifyClientVpnEndpointVersionEnum string

const (
	GetModifyClientVpnEndpointVersionEnumTwoThousandAndSixteen1115 GetModifyClientVpnEndpointVersionEnum = "2016-11-15"
)

type GetModifyClientVpnEndpointQueryParams struct {
	Action               GetModifyClientVpnEndpointActionEnum             `queryParam:"style=form,explode=true,name=Action"`
	ClientConnectOptions *GetModifyClientVpnEndpointClientConnectOptions  `queryParam:"style=form,explode=true,name=ClientConnectOptions"`
	ClientVpnEndpointID  string                                           `queryParam:"style=form,explode=true,name=ClientVpnEndpointId"`
	ConnectionLogOptions *GetModifyClientVpnEndpointConnectionLogOptions  `queryParam:"style=form,explode=true,name=ConnectionLogOptions"`
	Description          *string                                          `queryParam:"style=form,explode=true,name=Description"`
	DNSServers           *GetModifyClientVpnEndpointDNSServers            `queryParam:"style=form,explode=true,name=DnsServers"`
	DryRun               *bool                                            `queryParam:"style=form,explode=true,name=DryRun"`
	SecurityGroupID      []string                                         `queryParam:"style=form,explode=true,name=SecurityGroupId"`
	SelfServicePortal    *GetModifyClientVpnEndpointSelfServicePortalEnum `queryParam:"style=form,explode=true,name=SelfServicePortal"`
	ServerCertificateArn *string                                          `queryParam:"style=form,explode=true,name=ServerCertificateArn"`
	SplitTunnel          *bool                                            `queryParam:"style=form,explode=true,name=SplitTunnel"`
	Version              GetModifyClientVpnEndpointVersionEnum            `queryParam:"style=form,explode=true,name=Version"`
	VpcID                *string                                          `queryParam:"style=form,explode=true,name=VpcId"`
	VpnPort              *int64                                           `queryParam:"style=form,explode=true,name=VpnPort"`
}

type GetModifyClientVpnEndpointHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetModifyClientVpnEndpointRequest struct {
	QueryParams GetModifyClientVpnEndpointQueryParams
	Headers     GetModifyClientVpnEndpointHeaders
}

type GetModifyClientVpnEndpointResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
