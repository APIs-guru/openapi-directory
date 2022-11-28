package shared

// Parameter
// Describes an individual setting that controls some aspect of DAX behavior.
type Parameter struct {
	AllowedValues          *string                 `json:"AllowedValues,omitempty"`
	ChangeType             *ChangeTypeEnum         `json:"ChangeType,omitempty"`
	DataType               *string                 `json:"DataType,omitempty"`
	Description            *string                 `json:"Description,omitempty"`
	IsModifiable           *IsModifiableEnum       `json:"IsModifiable,omitempty"`
	NodeTypeSpecificValues []NodeTypeSpecificValue `json:"NodeTypeSpecificValues,omitempty"`
	ParameterName          *string                 `json:"ParameterName,omitempty"`
	ParameterType          *ParameterTypeEnum      `json:"ParameterType,omitempty"`
	ParameterValue         *string                 `json:"ParameterValue,omitempty"`
	Source                 *string                 `json:"Source,omitempty"`
}
