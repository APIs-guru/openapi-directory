package shared

// InternetGateway
// Describes an internet gateway.
type InternetGateway struct {
	Attachments       []InternetGatewayAttachment
	InternetGatewayID *string
	OwnerID           *string
	Tags              []Tag
}
