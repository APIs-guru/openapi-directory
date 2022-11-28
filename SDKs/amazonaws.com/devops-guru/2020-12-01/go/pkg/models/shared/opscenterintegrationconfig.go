package shared

// OpsCenterIntegrationConfig
//
//	Information about whether DevOps Guru is configured to create an OpsItem in AWS Systems Manager OpsCenter for each created insight.
type OpsCenterIntegrationConfig struct {
	OptInStatus *OptInStatusEnum `json:"OptInStatus,omitempty"`
}
