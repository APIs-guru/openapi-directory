package shared

type CreateEndpointMessage struct {
	CertificateArn             *string                          `json:"CertificateArn,omitempty"`
	DatabaseName               *string                          `json:"DatabaseName,omitempty"`
	DmsTransferSettings        *DmsTransferSettings             `json:"DmsTransferSettings,omitempty"`
	DocDbSettings              *DocDbSettings                   `json:"DocDbSettings,omitempty"`
	DynamoDbSettings           *DynamoDbSettings                `json:"DynamoDbSettings,omitempty"`
	ElasticsearchSettings      *ElasticsearchSettings           `json:"ElasticsearchSettings,omitempty"`
	EndpointIdentifier         string                           `json:"EndpointIdentifier"`
	EndpointType               ReplicationEndpointTypeValueEnum `json:"EndpointType"`
	EngineName                 string                           `json:"EngineName"`
	ExternalTableDefinition    *string                          `json:"ExternalTableDefinition,omitempty"`
	ExtraConnectionAttributes  *string                          `json:"ExtraConnectionAttributes,omitempty"`
	IbmDb2Settings             *IbmDb2Settings                  `json:"IBMDb2Settings,omitempty"`
	KafkaSettings              *KafkaSettings                   `json:"KafkaSettings,omitempty"`
	KinesisSettings            *KinesisSettings                 `json:"KinesisSettings,omitempty"`
	KmsKeyID                   *string                          `json:"KmsKeyId,omitempty"`
	MicrosoftSQLServerSettings *MicrosoftSQLServerSettings      `json:"MicrosoftSQLServerSettings,omitempty"`
	MongoDbSettings            *MongoDbSettings                 `json:"MongoDbSettings,omitempty"`
	MySQLSettings              *MySQLSettings                   `json:"MySQLSettings,omitempty"`
	NeptuneSettings            *NeptuneSettings                 `json:"NeptuneSettings,omitempty"`
	OracleSettings             *OracleSettings                  `json:"OracleSettings,omitempty"`
	Password                   *string                          `json:"Password,omitempty"`
	Port                       *int64                           `json:"Port,omitempty"`
	PostgreSQLSettings         *PostgreSQLSettings              `json:"PostgreSQLSettings,omitempty"`
	RedisSettings              *RedisSettings                   `json:"RedisSettings,omitempty"`
	RedshiftSettings           *RedshiftSettings                `json:"RedshiftSettings,omitempty"`
	ResourceIdentifier         *string                          `json:"ResourceIdentifier,omitempty"`
	S3Settings                 *S3Settings                      `json:"S3Settings,omitempty"`
	ServerName                 *string                          `json:"ServerName,omitempty"`
	ServiceAccessRoleArn       *string                          `json:"ServiceAccessRoleArn,omitempty"`
	SslMode                    *DmsSslModeValueEnum             `json:"SslMode,omitempty"`
	SybaseSettings             *SybaseSettings                  `json:"SybaseSettings,omitempty"`
	Tags                       []Tag                            `json:"Tags,omitempty"`
	Username                   *string                          `json:"Username,omitempty"`
}
