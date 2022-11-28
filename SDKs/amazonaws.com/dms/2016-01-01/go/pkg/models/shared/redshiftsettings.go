package shared

// RedshiftSettings
// Provides information that defines an Amazon Redshift endpoint.
type RedshiftSettings struct {
	AcceptAnyDate                *bool                    `json:"AcceptAnyDate,omitempty"`
	AfterConnectScript           *string                  `json:"AfterConnectScript,omitempty"`
	BucketFolder                 *string                  `json:"BucketFolder,omitempty"`
	BucketName                   *string                  `json:"BucketName,omitempty"`
	CaseSensitiveNames           *bool                    `json:"CaseSensitiveNames,omitempty"`
	CompUpdate                   *bool                    `json:"CompUpdate,omitempty"`
	ConnectionTimeout            *int64                   `json:"ConnectionTimeout,omitempty"`
	DatabaseName                 *string                  `json:"DatabaseName,omitempty"`
	DateFormat                   *string                  `json:"DateFormat,omitempty"`
	EmptyAsNull                  *bool                    `json:"EmptyAsNull,omitempty"`
	EncryptionMode               *EncryptionModeValueEnum `json:"EncryptionMode,omitempty"`
	ExplicitIds                  *bool                    `json:"ExplicitIds,omitempty"`
	FileTransferUploadStreams    *int64                   `json:"FileTransferUploadStreams,omitempty"`
	LoadTimeout                  *int64                   `json:"LoadTimeout,omitempty"`
	MaxFileSize                  *int64                   `json:"MaxFileSize,omitempty"`
	Password                     *string                  `json:"Password,omitempty"`
	Port                         *int64                   `json:"Port,omitempty"`
	RemoveQuotes                 *bool                    `json:"RemoveQuotes,omitempty"`
	ReplaceChars                 *string                  `json:"ReplaceChars,omitempty"`
	ReplaceInvalidChars          *string                  `json:"ReplaceInvalidChars,omitempty"`
	SecretsManagerAccessRoleArn  *string                  `json:"SecretsManagerAccessRoleArn,omitempty"`
	SecretsManagerSecretID       *string                  `json:"SecretsManagerSecretId,omitempty"`
	ServerName                   *string                  `json:"ServerName,omitempty"`
	ServerSideEncryptionKmsKeyID *string                  `json:"ServerSideEncryptionKmsKeyId,omitempty"`
	ServiceAccessRoleArn         *string                  `json:"ServiceAccessRoleArn,omitempty"`
	TimeFormat                   *string                  `json:"TimeFormat,omitempty"`
	TrimBlanks                   *bool                    `json:"TrimBlanks,omitempty"`
	TruncateColumns              *bool                    `json:"TruncateColumns,omitempty"`
	Username                     *string                  `json:"Username,omitempty"`
	WriteBufferSize              *int64                   `json:"WriteBufferSize,omitempty"`
}
