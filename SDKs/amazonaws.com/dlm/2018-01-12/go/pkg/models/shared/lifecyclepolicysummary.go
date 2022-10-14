package shared

type LifecyclePolicySummary struct {
	Description *string                        `json:"Description,omitempty"`
	PolicyID    *string                        `json:"PolicyId,omitempty"`
	PolicyType  *PolicyTypeValuesEnum          `json:"PolicyType,omitempty"`
	State       *GettablePolicyStateValuesEnum `json:"State,omitempty"`
	Tags        map[string]string              `json:"Tags,omitempty"`
}
