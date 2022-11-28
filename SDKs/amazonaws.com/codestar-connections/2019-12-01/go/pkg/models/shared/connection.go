package shared

// Connection
// <p>A resource that is used to connect third-party source providers with services like AWS CodePipeline.</p> <p>Note: A connection created through CloudFormation, the CLI, or the SDK is in `PENDING` status by default. You can make its status `AVAILABLE` by updating the connection in the console.</p>
type Connection struct {
	ConnectionArn    *string               `json:"ConnectionArn,omitempty"`
	ConnectionName   *string               `json:"ConnectionName,omitempty"`
	ConnectionStatus *ConnectionStatusEnum `json:"ConnectionStatus,omitempty"`
	HostArn          *string               `json:"HostArn,omitempty"`
	OwnerAccountID   *string               `json:"OwnerAccountId,omitempty"`
	ProviderType     *ProviderTypeEnum     `json:"ProviderType,omitempty"`
}
