package shared

// SelectParameters
// Contains information about the parameters used for a select.
type SelectParameters struct {
	Expression          *string              `json:"Expression,omitempty"`
	ExpressionType      *ExpressionTypeEnum  `json:"ExpressionType,omitempty"`
	InputSerialization  *InputSerialization  `json:"InputSerialization,omitempty"`
	OutputSerialization *OutputSerialization `json:"OutputSerialization,omitempty"`
}
