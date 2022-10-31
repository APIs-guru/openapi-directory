package shared

type DestinationFieldProperties struct {
	IsCreatable              *bool                    `json:"isCreatable,omitempty"`
	IsNullable               *bool                    `json:"isNullable,omitempty"`
	IsUpdatable              *bool                    `json:"isUpdatable,omitempty"`
	IsUpsertable             *bool                    `json:"isUpsertable,omitempty"`
	SupportedWriteOperations []WriteOperationTypeEnum `json:"supportedWriteOperations,omitempty"`
}
