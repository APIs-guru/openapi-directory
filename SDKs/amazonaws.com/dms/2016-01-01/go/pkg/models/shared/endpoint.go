package shared

type Endpoint struct {
	CertificateArn             *string                           `json:"CertificateArn"`
	DatabaseName               *string                           `json:"DatabaseName"`
	DmsTransferSettings        *DmsTransferSettings              `json:"DmsTransferSettings"`
	DocDbSettings              *DocDbSettings                    `json:"DocDbSettings"`
	DynamoDbSettings           *DynamoDbSettings                 `json:"DynamoDbSettings"`
	ElasticsearchSettings      *ElasticsearchSettings            `json:"ElasticsearchSettings"`
	EndpointArn                *string                           `json:"EndpointArn"`
	EndpointIdentifier         *string                           `json:"EndpointIdentifier"`
	EndpointType               *ReplicationEndpointTypeValueEnum `json:"EndpointType"`
	EngineDisplayName          *string                           `json:"EngineDisplayName"`
	EngineName                 *string                           `json:"EngineName"`
	ExternalID                 *string                           `json:"ExternalId"`
	ExternalTableDefinition    *string                           `json:"ExternalTableDefinition"`
	ExtraConnectionAttributes  *string                           `json:"ExtraConnectionAttributes"`
	IbmDb2Settings             *IbmDb2Settings                   `json:"IBMDb2Settings"`
	KafkaSettings              *KafkaSettings                    `json:"KafkaSettings"`
	KinesisSettings            *KinesisSettings                  `json:"KinesisSettings"`
	KmsKeyID                   *string                           `json:"KmsKeyId"`
	MicrosoftSQLServerSettings *MicrosoftSQLServerSettings       `json:"MicrosoftSQLServerSettings"`
	MongoDbSettings            *MongoDbSettings                  `json:"MongoDbSettings"`
	MySQLSettings              *MySQLSettings                    `json:"MySQLSettings"`
	NeptuneSettings            *NeptuneSettings                  `json:"NeptuneSettings"`
	OracleSettings             *OracleSettings                   `json:"OracleSettings"`
	Port                       *int64                            `json:"Port"`
	PostgreSQLSettings         *PostgreSQLSettings               `json:"PostgreSQLSettings"`
	RedisSettings              *RedisSettings                    `json:"RedisSettings"`
	RedshiftSettings           *RedshiftSettings                 `json:"RedshiftSettings"`
	S3Settings                 *S3Settings                       `json:"S3Settings"`
	ServerName                 *string                           `json:"ServerName"`
	ServiceAccessRoleArn       *string                           `json:"ServiceAccessRoleArn"`
	SslMode                    *DmsSslModeValueEnum              `json:"SslMode"`
	Status                     *string                           `json:"Status"`
	SybaseSettings             *SybaseSettings                   `json:"SybaseSettings"`
	Username                   *string                           `json:"Username"`
}
