package shared

type DeleteRemediationConfigurationRequest struct {
	ConfigRuleName string  `json:"ConfigRuleName"`
	ResourceType   *string `json:"ResourceType,omitempty"`
}
