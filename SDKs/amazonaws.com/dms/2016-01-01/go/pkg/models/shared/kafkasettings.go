package shared

type KafkaSettings struct {
	Broker                      *string                    `json:"Broker"`
	IncludeControlDetails       *bool                      `json:"IncludeControlDetails"`
	IncludeNullAndEmpty         *bool                      `json:"IncludeNullAndEmpty"`
	IncludePartitionValue       *bool                      `json:"IncludePartitionValue"`
	IncludeTableAlterOperations *bool                      `json:"IncludeTableAlterOperations"`
	IncludeTransactionDetails   *bool                      `json:"IncludeTransactionDetails"`
	MessageFormat               *MessageFormatValueEnum    `json:"MessageFormat"`
	MessageMaxBytes             *int64                     `json:"MessageMaxBytes"`
	NoHexPrefix                 *bool                      `json:"NoHexPrefix"`
	PartitionIncludeSchemaTable *bool                      `json:"PartitionIncludeSchemaTable"`
	SaslPassword                *string                    `json:"SaslPassword"`
	SaslUsername                *string                    `json:"SaslUsername"`
	SecurityProtocol            *KafkaSecurityProtocolEnum `json:"SecurityProtocol"`
	SslCaCertificateArn         *string                    `json:"SslCaCertificateArn"`
	SslClientCertificateArn     *string                    `json:"SslClientCertificateArn"`
	SslClientKeyArn             *string                    `json:"SslClientKeyArn"`
	SslClientKeyPassword        *string                    `json:"SslClientKeyPassword"`
	Topic                       *string                    `json:"Topic"`
}
