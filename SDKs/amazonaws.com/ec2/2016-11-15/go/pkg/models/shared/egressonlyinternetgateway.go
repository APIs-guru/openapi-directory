package shared

// EgressOnlyInternetGateway
// Describes an egress-only internet gateway.
type EgressOnlyInternetGateway struct {
	Attachments                 []InternetGatewayAttachment
	EgressOnlyInternetGatewayID *string
	Tags                        []Tag
}
