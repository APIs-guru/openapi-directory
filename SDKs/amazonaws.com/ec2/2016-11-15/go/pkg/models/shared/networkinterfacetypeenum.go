package shared

type NetworkInterfaceTypeEnum string

const (
	NetworkInterfaceTypeEnumInterface  NetworkInterfaceTypeEnum = "interface"
	NetworkInterfaceTypeEnumNatGateway NetworkInterfaceTypeEnum = "natGateway"
	NetworkInterfaceTypeEnumEfa        NetworkInterfaceTypeEnum = "efa"
	NetworkInterfaceTypeEnumTrunk      NetworkInterfaceTypeEnum = "trunk"
)
