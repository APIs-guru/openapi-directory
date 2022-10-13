package shared

type OracleSettings struct {
	AccessAlternateDirectly                *bool                    `json:"AccessAlternateDirectly"`
	AddSupplementalLogging                 *bool                    `json:"AddSupplementalLogging"`
	AdditionalArchivedLogDestID            *int64                   `json:"AdditionalArchivedLogDestId"`
	AllowSelectNestedTables                *bool                    `json:"AllowSelectNestedTables"`
	ArchivedLogDestID                      *int64                   `json:"ArchivedLogDestId"`
	ArchivedLogsOnly                       *bool                    `json:"ArchivedLogsOnly"`
	AsmPassword                            *string                  `json:"AsmPassword"`
	AsmServer                              *string                  `json:"AsmServer"`
	AsmUser                                *string                  `json:"AsmUser"`
	CharLengthSemantics                    *CharLengthSemanticsEnum `json:"CharLengthSemantics"`
	DatabaseName                           *string                  `json:"DatabaseName"`
	DirectPathNoLog                        *bool                    `json:"DirectPathNoLog"`
	DirectPathParallelLoad                 *bool                    `json:"DirectPathParallelLoad"`
	EnableHomogenousTablespace             *bool                    `json:"EnableHomogenousTablespace"`
	ExtraArchivedLogDestIds                []int64                  `json:"ExtraArchivedLogDestIds"`
	FailTasksOnLobTruncation               *bool                    `json:"FailTasksOnLobTruncation"`
	NumberDatatypeScale                    *int64                   `json:"NumberDatatypeScale"`
	OraclePathPrefix                       *string                  `json:"OraclePathPrefix"`
	ParallelAsmReadThreads                 *int64                   `json:"ParallelAsmReadThreads"`
	Password                               *string                  `json:"Password"`
	Port                                   *int64                   `json:"Port"`
	ReadAheadBlocks                        *int64                   `json:"ReadAheadBlocks"`
	ReadTableSpaceName                     *bool                    `json:"ReadTableSpaceName"`
	ReplacePathPrefix                      *bool                    `json:"ReplacePathPrefix"`
	RetryInterval                          *int64                   `json:"RetryInterval"`
	SecretsManagerAccessRoleArn            *string                  `json:"SecretsManagerAccessRoleArn"`
	SecretsManagerOracleAsmAccessRoleArn   *string                  `json:"SecretsManagerOracleAsmAccessRoleArn"`
	SecretsManagerOracleAsmSecretID        *string                  `json:"SecretsManagerOracleAsmSecretId"`
	SecretsManagerSecretID                 *string                  `json:"SecretsManagerSecretId"`
	SecurityDbEncryption                   *string                  `json:"SecurityDbEncryption"`
	SecurityDbEncryptionName               *string                  `json:"SecurityDbEncryptionName"`
	ServerName                             *string                  `json:"ServerName"`
	SpatialDataOptionToGeoJSONFunctionName *string                  `json:"SpatialDataOptionToGeoJsonFunctionName"`
	StandbyDelayTime                       *int64                   `json:"StandbyDelayTime"`
	UseAlternateFolderForOnline            *bool                    `json:"UseAlternateFolderForOnline"`
	UseBFile                               *bool                    `json:"UseBFile"`
	UseDirectPathFullLoad                  *bool                    `json:"UseDirectPathFullLoad"`
	UseLogminerReader                      *bool                    `json:"UseLogminerReader"`
	UsePathPrefix                          *string                  `json:"UsePathPrefix"`
	Username                               *string                  `json:"Username"`
}
