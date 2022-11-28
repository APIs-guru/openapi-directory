package shared

// Policy
// An Firewall Manager policy.
type Policy struct {
	DeleteUnusedFmManagedResources *bool                     `json:"DeleteUnusedFMManagedResources,omitempty"`
	ExcludeMap                     map[string][]string       `json:"ExcludeMap,omitempty"`
	ExcludeResourceTags            bool                      `json:"ExcludeResourceTags"`
	IncludeMap                     map[string][]string       `json:"IncludeMap,omitempty"`
	PolicyID                       *string                   `json:"PolicyId,omitempty"`
	PolicyName                     string                    `json:"PolicyName"`
	PolicyUpdateToken              *string                   `json:"PolicyUpdateToken,omitempty"`
	RemediationEnabled             bool                      `json:"RemediationEnabled"`
	ResourceTags                   []ResourceTag             `json:"ResourceTags,omitempty"`
	ResourceType                   string                    `json:"ResourceType"`
	ResourceTypeList               []string                  `json:"ResourceTypeList,omitempty"`
	SecurityServicePolicyData      SecurityServicePolicyData `json:"SecurityServicePolicyData"`
}
