package shared

type KinesisSettings struct {
	IncludeControlDetails       *bool                   `json:"IncludeControlDetails"`
	IncludeNullAndEmpty         *bool                   `json:"IncludeNullAndEmpty"`
	IncludePartitionValue       *bool                   `json:"IncludePartitionValue"`
	IncludeTableAlterOperations *bool                   `json:"IncludeTableAlterOperations"`
	IncludeTransactionDetails   *bool                   `json:"IncludeTransactionDetails"`
	MessageFormat               *MessageFormatValueEnum `json:"MessageFormat"`
	NoHexPrefix                 *bool                   `json:"NoHexPrefix"`
	PartitionIncludeSchemaTable *bool                   `json:"PartitionIncludeSchemaTable"`
	ServiceAccessRoleArn        *string                 `json:"ServiceAccessRoleArn"`
	StreamArn                   *string                 `json:"StreamArn"`
}
