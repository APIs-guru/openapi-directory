package shared

// PolicySummary
// Details of the Firewall Manager policy.
type PolicySummary struct {
	DeleteUnusedFmManagedResources *bool                    `json:"DeleteUnusedFMManagedResources,omitempty"`
	PolicyArn                      *string                  `json:"PolicyArn,omitempty"`
	PolicyID                       *string                  `json:"PolicyId,omitempty"`
	PolicyName                     *string                  `json:"PolicyName,omitempty"`
	RemediationEnabled             *bool                    `json:"RemediationEnabled,omitempty"`
	ResourceType                   *string                  `json:"ResourceType,omitempty"`
	SecurityServiceType            *SecurityServiceTypeEnum `json:"SecurityServiceType,omitempty"`
}
