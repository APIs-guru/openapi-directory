package shared

// ServiceIntegrationConfig
//
//	Information about the integration of DevOps Guru with another AWS service, such as AWS Systems Manager.
type ServiceIntegrationConfig struct {
	OpsCenter *OpsCenterIntegration `json:"OpsCenter,omitempty"`
}
