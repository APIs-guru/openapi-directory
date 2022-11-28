package shared

// ProcessorParameter
// Describes the processor parameter.
type ProcessorParameter struct {
	ParameterName  ProcessorParameterNameEnum `json:"ParameterName"`
	ParameterValue string                     `json:"ParameterValue"`
}
