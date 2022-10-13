package shared

type DestinationFieldProperties struct {
	IsCreatable              *bool                    `json:"isCreatable"`
	IsNullable               *bool                    `json:"isNullable"`
	IsUpdatable              *bool                    `json:"isUpdatable"`
	IsUpsertable             *bool                    `json:"isUpsertable"`
	SupportedWriteOperations []WriteOperationTypeEnum `json:"supportedWriteOperations"`
}
