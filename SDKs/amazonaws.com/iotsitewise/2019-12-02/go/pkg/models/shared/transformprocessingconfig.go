package shared

// TransformProcessingConfig
// The processing configuration for the given transform property. You can configure transforms to be kept at the edge or forwarded to the Amazon Web Services Cloud. You can also configure transforms to be computed at the edge or in the cloud.
type TransformProcessingConfig struct {
	ComputeLocation  ComputeLocationEnum `json:"computeLocation"`
	ForwardingConfig *ForwardingConfig   `json:"forwardingConfig,omitempty"`
}
