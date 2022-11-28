package shared

// ClientVpnEndpoint
// Describes a Client VPN endpoint.
type ClientVpnEndpoint struct {
	AssociatedTargetNetworks []AssociatedTargetNetwork
	AuthenticationOptions    []ClientVpnAuthentication
	ClientCidrBlock          *string
	ClientConnectOptions     *ClientConnectResponseOptions
	ClientVpnEndpointID      *string
	ConnectionLogOptions     *ConnectionLogResponseOptions
	CreationTime             *string
	DeletionTime             *string
	Description              *string
	DNSName                  *string
	DNSServers               []string
	SecurityGroupIds         []string
	SelfServicePortalURL     *string
	ServerCertificateArn     *string
	SplitTunnel              *bool
	Status                   *ClientVpnEndpointStatus
	Tags                     []Tag
	TransportProtocol        *TransportProtocolEnum
	VpcID                    *string
	VpnPort                  *int64
	VpnProtocol              *VpnProtocolEnum
}
