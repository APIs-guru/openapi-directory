package shared

type ConnectionTypeEnum string

const (
	ConnectionTypeEnumJdbc        ConnectionTypeEnum = "JDBC"
	ConnectionTypeEnumSftp        ConnectionTypeEnum = "SFTP"
	ConnectionTypeEnumMongodb     ConnectionTypeEnum = "MONGODB"
	ConnectionTypeEnumKafka       ConnectionTypeEnum = "KAFKA"
	ConnectionTypeEnumNetwork     ConnectionTypeEnum = "NETWORK"
	ConnectionTypeEnumMarketplace ConnectionTypeEnum = "MARKETPLACE"
	ConnectionTypeEnumCustom      ConnectionTypeEnum = "CUSTOM"
)
