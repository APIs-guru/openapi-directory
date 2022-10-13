package shared

type CreateDirectConnectGatewayRequest struct {
	AmazonSideAsn            *int64 `json:"amazonSideAsn"`
	DirectConnectGatewayName string `json:"directConnectGatewayName"`
}
