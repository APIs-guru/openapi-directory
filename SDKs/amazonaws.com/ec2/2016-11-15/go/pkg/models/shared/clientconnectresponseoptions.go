package shared

// ClientConnectResponseOptions
// The options for managing connection authorization for new client connections.
type ClientConnectResponseOptions struct {
	Enabled           *bool
	LambdaFunctionArn *string
	Status            *ClientVpnEndpointAttributeStatus
}
