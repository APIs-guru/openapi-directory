package shared

type UpdateServiceRequest struct {
	AutoScalingConfigurationArn *string                   `json:"AutoScalingConfigurationArn,omitempty"`
	HealthCheckConfiguration    *HealthCheckConfiguration `json:"HealthCheckConfiguration,omitempty"`
	InstanceConfiguration       *InstanceConfiguration    `json:"InstanceConfiguration,omitempty"`
	ServiceArn                  string                    `json:"ServiceArn"`
	SourceConfiguration         *SourceConfiguration      `json:"SourceConfiguration,omitempty"`
}
