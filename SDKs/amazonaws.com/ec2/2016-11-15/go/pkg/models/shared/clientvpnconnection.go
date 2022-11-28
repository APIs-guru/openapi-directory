package shared

// ClientVpnConnection
// Describes a client connection.
type ClientVpnConnection struct {
	ClientIP                  *string
	ClientVpnEndpointID       *string
	CommonName                *string
	ConnectionEndTime         *string
	ConnectionEstablishedTime *string
	ConnectionID              *string
	EgressBytes               *string
	EgressPackets             *string
	IngressBytes              *string
	IngressPackets            *string
	PostureComplianceStatuses []string
	Status                    *ClientVpnConnectionStatus
	Timestamp                 *string
	Username                  *string
}
