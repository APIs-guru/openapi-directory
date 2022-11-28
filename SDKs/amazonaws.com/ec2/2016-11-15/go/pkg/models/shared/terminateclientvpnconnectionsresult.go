package shared

type TerminateClientVpnConnectionsResult struct {
	ClientVpnEndpointID *string
	ConnectionStatuses  []TerminateConnectionStatus
	Username            *string
}
