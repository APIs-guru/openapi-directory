package shared




type TargetTypeEnum string

const (
    TargetTypeEnumGateway TargetTypeEnum = "GATEWAY"
TargetTypeEnumCarrierGateway TargetTypeEnum = "CARRIER_GATEWAY"
TargetTypeEnumInstance TargetTypeEnum = "INSTANCE"
TargetTypeEnumLocalGateway TargetTypeEnum = "LOCAL_GATEWAY"
TargetTypeEnumNatGateway TargetTypeEnum = "NAT_GATEWAY"
TargetTypeEnumNetworkInterface TargetTypeEnum = "NETWORK_INTERFACE"
TargetTypeEnumVpcEndpoint TargetTypeEnum = "VPC_ENDPOINT"
TargetTypeEnumVpcPeeringConnection TargetTypeEnum = "VPC_PEERING_CONNECTION"
TargetTypeEnumEgressOnlyInternetGateway TargetTypeEnum = "EGRESS_ONLY_INTERNET_GATEWAY"
TargetTypeEnumTransitGateway TargetTypeEnum = "TRANSIT_GATEWAY"
)


