package shared

import (
	"time"
)

// Service
// <p>Describes an AWS App Runner service. It can describe a service in any state, including deleted services.</p> <p>This type contains the full information about a service, including configuration details. It's returned by the <a href="https://docs.aws.amazon.com/apprunner/latest/api/API_CreateService.html">CreateService</a>, <a href="https://docs.aws.amazon.com/apprunner/latest/api/API_DescribeService.html">DescribeService</a>, and <a href="https://docs.aws.amazon.com/apprunner/latest/api/API_DeleteService.html">DeleteService</a> actions. A subset of this information is returned by the <a href="https://docs.aws.amazon.com/apprunner/latest/api/API_ListServices.html">ListServices</a> action using the <a href="https://docs.aws.amazon.com/apprunner/latest/api/API_ServiceSummary.html">ServiceSummary</a> type.</p>
type Service struct {
	AutoScalingConfigurationSummary AutoScalingConfigurationSummary `json:"AutoScalingConfigurationSummary"`
	CreatedAt                       time.Time                       `json:"CreatedAt"`
	DeletedAt                       *time.Time                      `json:"DeletedAt,omitempty"`
	EncryptionConfiguration         *EncryptionConfiguration        `json:"EncryptionConfiguration,omitempty"`
	HealthCheckConfiguration        *HealthCheckConfiguration       `json:"HealthCheckConfiguration,omitempty"`
	InstanceConfiguration           InstanceConfiguration           `json:"InstanceConfiguration"`
	ServiceArn                      string                          `json:"ServiceArn"`
	ServiceID                       string                          `json:"ServiceId"`
	ServiceName                     string                          `json:"ServiceName"`
	ServiceURL                      string                          `json:"ServiceUrl"`
	SourceConfiguration             SourceConfiguration             `json:"SourceConfiguration"`
	Status                          ServiceStatusEnum               `json:"Status"`
	UpdatedAt                       time.Time                       `json:"UpdatedAt"`
}
