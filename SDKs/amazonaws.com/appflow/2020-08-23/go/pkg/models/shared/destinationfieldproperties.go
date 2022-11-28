package shared

// DestinationFieldProperties
//
//	The properties that can be applied to a field when connector is being used as a destination.
type DestinationFieldProperties struct {
	IsCreatable              *bool                    `json:"isCreatable,omitempty"`
	IsNullable               *bool                    `json:"isNullable,omitempty"`
	IsUpdatable              *bool                    `json:"isUpdatable,omitempty"`
	IsUpsertable             *bool                    `json:"isUpsertable,omitempty"`
	SupportedWriteOperations []WriteOperationTypeEnum `json:"supportedWriteOperations,omitempty"`
}
