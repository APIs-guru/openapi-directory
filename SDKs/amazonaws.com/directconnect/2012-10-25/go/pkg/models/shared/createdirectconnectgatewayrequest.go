package shared

type CreateDirectConnectGatewayRequest struct {
	AmazonSideAsn            *int64 `json:"amazonSideAsn,omitempty"`
	DirectConnectGatewayName string `json:"directConnectGatewayName"`
}
