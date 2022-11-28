package shared

// OracleSettings
// Provides information that defines an Oracle endpoint.
type OracleSettings struct {
	AccessAlternateDirectly                *bool                    `json:"AccessAlternateDirectly,omitempty"`
	AddSupplementalLogging                 *bool                    `json:"AddSupplementalLogging,omitempty"`
	AdditionalArchivedLogDestID            *int64                   `json:"AdditionalArchivedLogDestId,omitempty"`
	AllowSelectNestedTables                *bool                    `json:"AllowSelectNestedTables,omitempty"`
	ArchivedLogDestID                      *int64                   `json:"ArchivedLogDestId,omitempty"`
	ArchivedLogsOnly                       *bool                    `json:"ArchivedLogsOnly,omitempty"`
	AsmPassword                            *string                  `json:"AsmPassword,omitempty"`
	AsmServer                              *string                  `json:"AsmServer,omitempty"`
	AsmUser                                *string                  `json:"AsmUser,omitempty"`
	CharLengthSemantics                    *CharLengthSemanticsEnum `json:"CharLengthSemantics,omitempty"`
	DatabaseName                           *string                  `json:"DatabaseName,omitempty"`
	DirectPathNoLog                        *bool                    `json:"DirectPathNoLog,omitempty"`
	DirectPathParallelLoad                 *bool                    `json:"DirectPathParallelLoad,omitempty"`
	EnableHomogenousTablespace             *bool                    `json:"EnableHomogenousTablespace,omitempty"`
	ExtraArchivedLogDestIds                []int64                  `json:"ExtraArchivedLogDestIds,omitempty"`
	FailTasksOnLobTruncation               *bool                    `json:"FailTasksOnLobTruncation,omitempty"`
	NumberDatatypeScale                    *int64                   `json:"NumberDatatypeScale,omitempty"`
	OraclePathPrefix                       *string                  `json:"OraclePathPrefix,omitempty"`
	ParallelAsmReadThreads                 *int64                   `json:"ParallelAsmReadThreads,omitempty"`
	Password                               *string                  `json:"Password,omitempty"`
	Port                                   *int64                   `json:"Port,omitempty"`
	ReadAheadBlocks                        *int64                   `json:"ReadAheadBlocks,omitempty"`
	ReadTableSpaceName                     *bool                    `json:"ReadTableSpaceName,omitempty"`
	ReplacePathPrefix                      *bool                    `json:"ReplacePathPrefix,omitempty"`
	RetryInterval                          *int64                   `json:"RetryInterval,omitempty"`
	SecretsManagerAccessRoleArn            *string                  `json:"SecretsManagerAccessRoleArn,omitempty"`
	SecretsManagerOracleAsmAccessRoleArn   *string                  `json:"SecretsManagerOracleAsmAccessRoleArn,omitempty"`
	SecretsManagerOracleAsmSecretID        *string                  `json:"SecretsManagerOracleAsmSecretId,omitempty"`
	SecretsManagerSecretID                 *string                  `json:"SecretsManagerSecretId,omitempty"`
	SecurityDbEncryption                   *string                  `json:"SecurityDbEncryption,omitempty"`
	SecurityDbEncryptionName               *string                  `json:"SecurityDbEncryptionName,omitempty"`
	ServerName                             *string                  `json:"ServerName,omitempty"`
	SpatialDataOptionToGeoJSONFunctionName *string                  `json:"SpatialDataOptionToGeoJsonFunctionName,omitempty"`
	StandbyDelayTime                       *int64                   `json:"StandbyDelayTime,omitempty"`
	UseAlternateFolderForOnline            *bool                    `json:"UseAlternateFolderForOnline,omitempty"`
	UseBFile                               *bool                    `json:"UseBFile,omitempty"`
	UseDirectPathFullLoad                  *bool                    `json:"UseDirectPathFullLoad,omitempty"`
	UseLogminerReader                      *bool                    `json:"UseLogminerReader,omitempty"`
	UsePathPrefix                          *string                  `json:"UsePathPrefix,omitempty"`
	Username                               *string                  `json:"Username,omitempty"`
}
