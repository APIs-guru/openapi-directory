package shared

// Parameter
// Describes an individual setting that controls some aspect of ElastiCache behavior.
type Parameter struct {
	AllowedValues        *string
	ChangeType           *ChangeTypeEnum
	DataType             *string
	Description          *string
	IsModifiable         *bool
	MinimumEngineVersion *string
	ParameterName        *string
	ParameterValue       *string
	Source               *string
}
