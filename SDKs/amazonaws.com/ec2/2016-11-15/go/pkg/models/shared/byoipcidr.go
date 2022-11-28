package shared

// ByoipCidr
// Information about an address range that is provisioned for use with your Amazon Web Services resources through bring your own IP addresses (BYOIP).
type ByoipCidr struct {
	Cidr          *string
	Description   *string
	State         *ByoipCidrStateEnum
	StatusMessage *string
}
