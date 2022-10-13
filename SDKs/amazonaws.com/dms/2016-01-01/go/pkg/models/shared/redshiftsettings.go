package shared

type RedshiftSettings struct {
	AcceptAnyDate                *bool                    `json:"AcceptAnyDate"`
	AfterConnectScript           *string                  `json:"AfterConnectScript"`
	BucketFolder                 *string                  `json:"BucketFolder"`
	BucketName                   *string                  `json:"BucketName"`
	CaseSensitiveNames           *bool                    `json:"CaseSensitiveNames"`
	CompUpdate                   *bool                    `json:"CompUpdate"`
	ConnectionTimeout            *int64                   `json:"ConnectionTimeout"`
	DatabaseName                 *string                  `json:"DatabaseName"`
	DateFormat                   *string                  `json:"DateFormat"`
	EmptyAsNull                  *bool                    `json:"EmptyAsNull"`
	EncryptionMode               *EncryptionModeValueEnum `json:"EncryptionMode"`
	ExplicitIds                  *bool                    `json:"ExplicitIds"`
	FileTransferUploadStreams    *int64                   `json:"FileTransferUploadStreams"`
	LoadTimeout                  *int64                   `json:"LoadTimeout"`
	MaxFileSize                  *int64                   `json:"MaxFileSize"`
	Password                     *string                  `json:"Password"`
	Port                         *int64                   `json:"Port"`
	RemoveQuotes                 *bool                    `json:"RemoveQuotes"`
	ReplaceChars                 *string                  `json:"ReplaceChars"`
	ReplaceInvalidChars          *string                  `json:"ReplaceInvalidChars"`
	SecretsManagerAccessRoleArn  *string                  `json:"SecretsManagerAccessRoleArn"`
	SecretsManagerSecretID       *string                  `json:"SecretsManagerSecretId"`
	ServerName                   *string                  `json:"ServerName"`
	ServerSideEncryptionKmsKeyID *string                  `json:"ServerSideEncryptionKmsKeyId"`
	ServiceAccessRoleArn         *string                  `json:"ServiceAccessRoleArn"`
	TimeFormat                   *string                  `json:"TimeFormat"`
	TrimBlanks                   *bool                    `json:"TrimBlanks"`
	TruncateColumns              *bool                    `json:"TruncateColumns"`
	Username                     *string                  `json:"Username"`
	WriteBufferSize              *int64                   `json:"WriteBufferSize"`
}
