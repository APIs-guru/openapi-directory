package shared

type ModifyEndpointMessage struct {
	CertificateArn             *string                           `json:"CertificateArn"`
	DatabaseName               *string                           `json:"DatabaseName"`
	DmsTransferSettings        *DmsTransferSettings              `json:"DmsTransferSettings"`
	DocDbSettings              *DocDbSettings                    `json:"DocDbSettings"`
	DynamoDbSettings           *DynamoDbSettings                 `json:"DynamoDbSettings"`
	ElasticsearchSettings      *ElasticsearchSettings            `json:"ElasticsearchSettings"`
	EndpointArn                string                            `json:"EndpointArn"`
	EndpointIdentifier         *string                           `json:"EndpointIdentifier"`
	EndpointType               *ReplicationEndpointTypeValueEnum `json:"EndpointType"`
	EngineName                 *string                           `json:"EngineName"`
	ExactSettings              *bool                             `json:"ExactSettings"`
	ExternalTableDefinition    *string                           `json:"ExternalTableDefinition"`
	ExtraConnectionAttributes  *string                           `json:"ExtraConnectionAttributes"`
	IbmDb2Settings             *IbmDb2Settings                   `json:"IBMDb2Settings"`
	KafkaSettings              *KafkaSettings                    `json:"KafkaSettings"`
	KinesisSettings            *KinesisSettings                  `json:"KinesisSettings"`
	MicrosoftSQLServerSettings *MicrosoftSQLServerSettings       `json:"MicrosoftSQLServerSettings"`
	MongoDbSettings            *MongoDbSettings                  `json:"MongoDbSettings"`
	MySQLSettings              *MySQLSettings                    `json:"MySQLSettings"`
	NeptuneSettings            *NeptuneSettings                  `json:"NeptuneSettings"`
	OracleSettings             *OracleSettings                   `json:"OracleSettings"`
	Password                   *string                           `json:"Password"`
	Port                       *int64                            `json:"Port"`
	PostgreSQLSettings         *PostgreSQLSettings               `json:"PostgreSQLSettings"`
	RedisSettings              *RedisSettings                    `json:"RedisSettings"`
	RedshiftSettings           *RedshiftSettings                 `json:"RedshiftSettings"`
	S3Settings                 *S3Settings                       `json:"S3Settings"`
	ServerName                 *string                           `json:"ServerName"`
	ServiceAccessRoleArn       *string                           `json:"ServiceAccessRoleArn"`
	SslMode                    *DmsSslModeValueEnum              `json:"SslMode"`
	SybaseSettings             *SybaseSettings                   `json:"SybaseSettings"`
	Username                   *string                           `json:"Username"`
}
