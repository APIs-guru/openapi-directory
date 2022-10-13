package shared

type SelectParameters struct {
	Expression          *string              `json:"Expression"`
	ExpressionType      *ExpressionTypeEnum  `json:"ExpressionType"`
	InputSerialization  *InputSerialization  `json:"InputSerialization"`
	OutputSerialization *OutputSerialization `json:"OutputSerialization"`
}
