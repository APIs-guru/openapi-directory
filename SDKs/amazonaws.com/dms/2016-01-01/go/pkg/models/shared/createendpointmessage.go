package shared

type CreateEndpointMessage struct {
	CertificateArn             *string                          `json:"CertificateArn"`
	DatabaseName               *string                          `json:"DatabaseName"`
	DmsTransferSettings        *DmsTransferSettings             `json:"DmsTransferSettings"`
	DocDbSettings              *DocDbSettings                   `json:"DocDbSettings"`
	DynamoDbSettings           *DynamoDbSettings                `json:"DynamoDbSettings"`
	ElasticsearchSettings      *ElasticsearchSettings           `json:"ElasticsearchSettings"`
	EndpointIdentifier         string                           `json:"EndpointIdentifier"`
	EndpointType               ReplicationEndpointTypeValueEnum `json:"EndpointType"`
	EngineName                 string                           `json:"EngineName"`
	ExternalTableDefinition    *string                          `json:"ExternalTableDefinition"`
	ExtraConnectionAttributes  *string                          `json:"ExtraConnectionAttributes"`
	IbmDb2Settings             *IbmDb2Settings                  `json:"IBMDb2Settings"`
	KafkaSettings              *KafkaSettings                   `json:"KafkaSettings"`
	KinesisSettings            *KinesisSettings                 `json:"KinesisSettings"`
	KmsKeyID                   *string                          `json:"KmsKeyId"`
	MicrosoftSQLServerSettings *MicrosoftSQLServerSettings      `json:"MicrosoftSQLServerSettings"`
	MongoDbSettings            *MongoDbSettings                 `json:"MongoDbSettings"`
	MySQLSettings              *MySQLSettings                   `json:"MySQLSettings"`
	NeptuneSettings            *NeptuneSettings                 `json:"NeptuneSettings"`
	OracleSettings             *OracleSettings                  `json:"OracleSettings"`
	Password                   *string                          `json:"Password"`
	Port                       *int64                           `json:"Port"`
	PostgreSQLSettings         *PostgreSQLSettings              `json:"PostgreSQLSettings"`
	RedisSettings              *RedisSettings                   `json:"RedisSettings"`
	RedshiftSettings           *RedshiftSettings                `json:"RedshiftSettings"`
	ResourceIdentifier         *string                          `json:"ResourceIdentifier"`
	S3Settings                 *S3Settings                      `json:"S3Settings"`
	ServerName                 *string                          `json:"ServerName"`
	ServiceAccessRoleArn       *string                          `json:"ServiceAccessRoleArn"`
	SslMode                    *DmsSslModeValueEnum             `json:"SslMode"`
	SybaseSettings             *SybaseSettings                  `json:"SybaseSettings"`
	Tags                       []Tag                            `json:"Tags"`
	Username                   *string                          `json:"Username"`
}
