package shared

// CustomerGateway
// Describes a customer gateway.
type CustomerGateway struct {
	BgpAsn            *string
	CertificateArn    *string
	CustomerGatewayID *string
	DeviceName        *string
	IPAddress         *string
	State             *string
	Tags              []Tag
	Type              *string
}
