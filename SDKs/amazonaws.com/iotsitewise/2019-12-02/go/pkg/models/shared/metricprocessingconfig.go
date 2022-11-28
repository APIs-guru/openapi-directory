package shared

// MetricProcessingConfig
// The processing configuration for the given metric property. You can configure metrics to be computed at the edge or in the Amazon Web Services Cloud. By default, metrics are forwarded to the cloud.
type MetricProcessingConfig struct {
	ComputeLocation ComputeLocationEnum `json:"computeLocation"`
}
