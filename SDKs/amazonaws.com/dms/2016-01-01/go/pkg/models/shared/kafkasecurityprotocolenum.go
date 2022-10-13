package shared

type KafkaSecurityProtocolEnum string

const (
	KafkaSecurityProtocolEnumPlaintext         KafkaSecurityProtocolEnum = "plaintext"
	KafkaSecurityProtocolEnumSslAuthentication KafkaSecurityProtocolEnum = "ssl-authentication"
	KafkaSecurityProtocolEnumSslEncryption     KafkaSecurityProtocolEnum = "ssl-encryption"
	KafkaSecurityProtocolEnumSaslSsl           KafkaSecurityProtocolEnum = "sasl-ssl"
)
