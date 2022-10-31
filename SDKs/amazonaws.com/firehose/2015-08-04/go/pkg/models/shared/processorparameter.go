package shared

type ProcessorParameter struct {
	ParameterName  ProcessorParameterNameEnum `json:"ParameterName"`
	ParameterValue string                     `json:"ParameterValue"`
}
