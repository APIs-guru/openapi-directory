package shared

type ConnectionTypeEnum string

const (
	ConnectionTypeEnumInternet ConnectionTypeEnum = "INTERNET"
	ConnectionTypeEnumVpcLink  ConnectionTypeEnum = "VPC_LINK"
)
