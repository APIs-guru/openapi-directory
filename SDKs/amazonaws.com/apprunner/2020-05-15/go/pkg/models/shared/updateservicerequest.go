package shared

type UpdateServiceRequest struct {
	AutoScalingConfigurationArn *string                   `json:"AutoScalingConfigurationArn"`
	HealthCheckConfiguration    *HealthCheckConfiguration `json:"HealthCheckConfiguration"`
	InstanceConfiguration       *InstanceConfiguration    `json:"InstanceConfiguration"`
	ServiceArn                  string                    `json:"ServiceArn"`
	SourceConfiguration         *SourceConfiguration      `json:"SourceConfiguration"`
}
