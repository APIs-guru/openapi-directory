package shared

type TransformProcessingConfig struct {
	ComputeLocation  ComputeLocationEnum `json:"computeLocation"`
	ForwardingConfig *ForwardingConfig   `json:"forwardingConfig,omitempty"`
}
