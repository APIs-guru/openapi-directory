package shared

type DescribeCarrierGatewaysResult struct {
	CarrierGateways []CarrierGateway
	NextToken       *string
}
