package shared



type CreateServiceRequest struct {
    AutoScalingConfigurationArn *string `json:"AutoScalingConfigurationArn,omitempty"`
    EncryptionConfiguration *EncryptionConfiguration `json:"EncryptionConfiguration,omitempty"`
    HealthCheckConfiguration *HealthCheckConfiguration `json:"HealthCheckConfiguration,omitempty"`
    InstanceConfiguration *InstanceConfiguration `json:"InstanceConfiguration,omitempty"`
    ServiceName string `json:"ServiceName"`
    SourceConfiguration SourceConfiguration `json:"SourceConfiguration"`
    Tags []Tag `json:"Tags,omitempty"`
    
}

