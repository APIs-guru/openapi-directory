package shared

type KafkaSettings struct {
	Broker                      *string                    `json:"Broker,omitempty"`
	IncludeControlDetails       *bool                      `json:"IncludeControlDetails,omitempty"`
	IncludeNullAndEmpty         *bool                      `json:"IncludeNullAndEmpty,omitempty"`
	IncludePartitionValue       *bool                      `json:"IncludePartitionValue,omitempty"`
	IncludeTableAlterOperations *bool                      `json:"IncludeTableAlterOperations,omitempty"`
	IncludeTransactionDetails   *bool                      `json:"IncludeTransactionDetails,omitempty"`
	MessageFormat               *MessageFormatValueEnum    `json:"MessageFormat,omitempty"`
	MessageMaxBytes             *int64                     `json:"MessageMaxBytes,omitempty"`
	NoHexPrefix                 *bool                      `json:"NoHexPrefix,omitempty"`
	PartitionIncludeSchemaTable *bool                      `json:"PartitionIncludeSchemaTable,omitempty"`
	SaslPassword                *string                    `json:"SaslPassword,omitempty"`
	SaslUsername                *string                    `json:"SaslUsername,omitempty"`
	SecurityProtocol            *KafkaSecurityProtocolEnum `json:"SecurityProtocol,omitempty"`
	SslCaCertificateArn         *string                    `json:"SslCaCertificateArn,omitempty"`
	SslClientCertificateArn     *string                    `json:"SslClientCertificateArn,omitempty"`
	SslClientKeyArn             *string                    `json:"SslClientKeyArn,omitempty"`
	SslClientKeyPassword        *string                    `json:"SslClientKeyPassword,omitempty"`
	Topic                       *string                    `json:"Topic,omitempty"`
}
