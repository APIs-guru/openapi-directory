package shared

type VpcEndpointTypeEnum string

const (
	VpcEndpointTypeEnumInterface           VpcEndpointTypeEnum = "Interface"
	VpcEndpointTypeEnumGateway             VpcEndpointTypeEnum = "Gateway"
	VpcEndpointTypeEnumGatewayLoadBalancer VpcEndpointTypeEnum = "GatewayLoadBalancer"
)
