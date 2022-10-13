package shared

type CreateServiceRequest struct {
	AutoScalingConfigurationArn *string                   `json:"AutoScalingConfigurationArn"`
	EncryptionConfiguration     *EncryptionConfiguration  `json:"EncryptionConfiguration"`
	HealthCheckConfiguration    *HealthCheckConfiguration `json:"HealthCheckConfiguration"`
	InstanceConfiguration       *InstanceConfiguration    `json:"InstanceConfiguration"`
	ServiceName                 string                    `json:"ServiceName"`
	SourceConfiguration         SourceConfiguration       `json:"SourceConfiguration"`
	Tags                        []Tag                     `json:"Tags"`
}
