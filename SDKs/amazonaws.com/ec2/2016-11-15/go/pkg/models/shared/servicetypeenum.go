package shared

type ServiceTypeEnum string

const (
	ServiceTypeEnumInterface           ServiceTypeEnum = "Interface"
	ServiceTypeEnumGateway             ServiceTypeEnum = "Gateway"
	ServiceTypeEnumGatewayLoadBalancer ServiceTypeEnum = "GatewayLoadBalancer"
)
