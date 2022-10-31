package shared

type ModifyEndpointMessage struct {
	CertificateArn             *string                           `json:"CertificateArn,omitempty"`
	DatabaseName               *string                           `json:"DatabaseName,omitempty"`
	DmsTransferSettings        *DmsTransferSettings              `json:"DmsTransferSettings,omitempty"`
	DocDbSettings              *DocDbSettings                    `json:"DocDbSettings,omitempty"`
	DynamoDbSettings           *DynamoDbSettings                 `json:"DynamoDbSettings,omitempty"`
	ElasticsearchSettings      *ElasticsearchSettings            `json:"ElasticsearchSettings,omitempty"`
	EndpointArn                string                            `json:"EndpointArn"`
	EndpointIdentifier         *string                           `json:"EndpointIdentifier,omitempty"`
	EndpointType               *ReplicationEndpointTypeValueEnum `json:"EndpointType,omitempty"`
	EngineName                 *string                           `json:"EngineName,omitempty"`
	ExactSettings              *bool                             `json:"ExactSettings,omitempty"`
	ExternalTableDefinition    *string                           `json:"ExternalTableDefinition,omitempty"`
	ExtraConnectionAttributes  *string                           `json:"ExtraConnectionAttributes,omitempty"`
	IbmDb2Settings             *IbmDb2Settings                   `json:"IBMDb2Settings,omitempty"`
	KafkaSettings              *KafkaSettings                    `json:"KafkaSettings,omitempty"`
	KinesisSettings            *KinesisSettings                  `json:"KinesisSettings,omitempty"`
	MicrosoftSQLServerSettings *MicrosoftSQLServerSettings       `json:"MicrosoftSQLServerSettings,omitempty"`
	MongoDbSettings            *MongoDbSettings                  `json:"MongoDbSettings,omitempty"`
	MySQLSettings              *MySQLSettings                    `json:"MySQLSettings,omitempty"`
	NeptuneSettings            *NeptuneSettings                  `json:"NeptuneSettings,omitempty"`
	OracleSettings             *OracleSettings                   `json:"OracleSettings,omitempty"`
	Password                   *string                           `json:"Password,omitempty"`
	Port                       *int64                            `json:"Port,omitempty"`
	PostgreSQLSettings         *PostgreSQLSettings               `json:"PostgreSQLSettings,omitempty"`
	RedisSettings              *RedisSettings                    `json:"RedisSettings,omitempty"`
	RedshiftSettings           *RedshiftSettings                 `json:"RedshiftSettings,omitempty"`
	S3Settings                 *S3Settings                       `json:"S3Settings,omitempty"`
	ServerName                 *string                           `json:"ServerName,omitempty"`
	ServiceAccessRoleArn       *string                           `json:"ServiceAccessRoleArn,omitempty"`
	SslMode                    *DmsSslModeValueEnum              `json:"SslMode,omitempty"`
	SybaseSettings             *SybaseSettings                   `json:"SybaseSettings,omitempty"`
	Username                   *string                           `json:"Username,omitempty"`
}
