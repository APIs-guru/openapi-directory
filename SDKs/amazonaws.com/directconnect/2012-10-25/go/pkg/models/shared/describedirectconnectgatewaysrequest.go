package shared

type DescribeDirectConnectGatewaysRequest struct {
	DirectConnectGatewayID *string `json:"directConnectGatewayId"`
	MaxResults             *int64  `json:"maxResults"`
	NextToken              *string `json:"nextToken"`
}
