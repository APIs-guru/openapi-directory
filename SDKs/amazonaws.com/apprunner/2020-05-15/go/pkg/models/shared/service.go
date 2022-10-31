package shared

import (
"time")

type Service struct {
    AutoScalingConfigurationSummary AutoScalingConfigurationSummary `json:"AutoScalingConfigurationSummary"`
    CreatedAt time.Time `json:"CreatedAt"`
    DeletedAt *time.Time `json:"DeletedAt,omitempty"`
    EncryptionConfiguration *EncryptionConfiguration `json:"EncryptionConfiguration,omitempty"`
    HealthCheckConfiguration *HealthCheckConfiguration `json:"HealthCheckConfiguration,omitempty"`
    InstanceConfiguration InstanceConfiguration `json:"InstanceConfiguration"`
    ServiceArn string `json:"ServiceArn"`
    ServiceID string `json:"ServiceId"`
    ServiceName string `json:"ServiceName"`
    ServiceURL string `json:"ServiceUrl"`
    SourceConfiguration SourceConfiguration `json:"SourceConfiguration"`
    Status ServiceStatusEnum `json:"Status"`
    UpdatedAt time.Time `json:"UpdatedAt"`
    
}

