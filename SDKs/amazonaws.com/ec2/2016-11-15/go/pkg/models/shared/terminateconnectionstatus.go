package shared

// TerminateConnectionStatus
// Information about a terminated Client VPN endpoint client connection.
type TerminateConnectionStatus struct {
	ConnectionID   *string
	CurrentStatus  *ClientVpnConnectionStatus
	PreviousStatus *ClientVpnConnectionStatus
}
