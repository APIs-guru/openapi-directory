package shared



type KinesisSettings struct {
    IncludeControlDetails *bool `json:"IncludeControlDetails,omitempty"`
    IncludeNullAndEmpty *bool `json:"IncludeNullAndEmpty,omitempty"`
    IncludePartitionValue *bool `json:"IncludePartitionValue,omitempty"`
    IncludeTableAlterOperations *bool `json:"IncludeTableAlterOperations,omitempty"`
    IncludeTransactionDetails *bool `json:"IncludeTransactionDetails,omitempty"`
    MessageFormat *MessageFormatValueEnum `json:"MessageFormat,omitempty"`
    NoHexPrefix *bool `json:"NoHexPrefix,omitempty"`
    PartitionIncludeSchemaTable *bool `json:"PartitionIncludeSchemaTable,omitempty"`
    ServiceAccessRoleArn *string `json:"ServiceAccessRoleArn,omitempty"`
    StreamArn *string `json:"StreamArn,omitempty"`
    
}

