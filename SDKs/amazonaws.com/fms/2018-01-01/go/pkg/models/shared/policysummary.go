package shared

type PolicySummary struct {
	DeleteUnusedFmManagedResources *bool                    `json:"DeleteUnusedFMManagedResources"`
	PolicyArn                      *string                  `json:"PolicyArn"`
	PolicyID                       *string                  `json:"PolicyId"`
	PolicyName                     *string                  `json:"PolicyName"`
	RemediationEnabled             *bool                    `json:"RemediationEnabled"`
	ResourceType                   *string                  `json:"ResourceType"`
	SecurityServiceType            *SecurityServiceTypeEnum `json:"SecurityServiceType"`
}
