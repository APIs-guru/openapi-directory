package shared

type Parameter struct {
	AllowedValues          *string                 `json:"AllowedValues"`
	ChangeType             *ChangeTypeEnum         `json:"ChangeType"`
	DataType               *string                 `json:"DataType"`
	Description            *string                 `json:"Description"`
	IsModifiable           *IsModifiableEnum       `json:"IsModifiable"`
	NodeTypeSpecificValues []NodeTypeSpecificValue `json:"NodeTypeSpecificValues"`
	ParameterName          *string                 `json:"ParameterName"`
	ParameterType          *ParameterTypeEnum      `json:"ParameterType"`
	ParameterValue         *string                 `json:"ParameterValue"`
	Source                 *string                 `json:"Source"`
}
