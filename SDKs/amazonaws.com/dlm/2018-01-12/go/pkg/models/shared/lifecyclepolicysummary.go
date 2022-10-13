package shared

type LifecyclePolicySummary struct {
	Description *string                        `json:"Description"`
	PolicyID    *string                        `json:"PolicyId"`
	PolicyType  *PolicyTypeValuesEnum          `json:"PolicyType"`
	State       *GettablePolicyStateValuesEnum `json:"State"`
	Tags        map[string]string              `json:"Tags"`
}
