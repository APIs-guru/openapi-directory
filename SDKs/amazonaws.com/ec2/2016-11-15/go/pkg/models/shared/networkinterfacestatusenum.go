package shared

type NetworkInterfaceStatusEnum string

const (
	NetworkInterfaceStatusEnumAvailable  NetworkInterfaceStatusEnum = "available"
	NetworkInterfaceStatusEnumAssociated NetworkInterfaceStatusEnum = "associated"
	NetworkInterfaceStatusEnumAttaching  NetworkInterfaceStatusEnum = "attaching"
	NetworkInterfaceStatusEnumInUse      NetworkInterfaceStatusEnum = "in-use"
	NetworkInterfaceStatusEnumDetaching  NetworkInterfaceStatusEnum = "detaching"
)
