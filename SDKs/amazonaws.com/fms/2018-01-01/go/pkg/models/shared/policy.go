package shared

type Policy struct {
	DeleteUnusedFmManagedResources *bool                     `json:"DeleteUnusedFMManagedResources"`
	ExcludeMap                     map[string][]string       `json:"ExcludeMap"`
	ExcludeResourceTags            bool                      `json:"ExcludeResourceTags"`
	IncludeMap                     map[string][]string       `json:"IncludeMap"`
	PolicyID                       *string                   `json:"PolicyId"`
	PolicyName                     string                    `json:"PolicyName"`
	PolicyUpdateToken              *string                   `json:"PolicyUpdateToken"`
	RemediationEnabled             bool                      `json:"RemediationEnabled"`
	ResourceTags                   []ResourceTag             `json:"ResourceTags"`
	ResourceType                   string                    `json:"ResourceType"`
	ResourceTypeList               []string                  `json:"ResourceTypeList"`
	SecurityServicePolicyData      SecurityServicePolicyData `json:"SecurityServicePolicyData"`
}
