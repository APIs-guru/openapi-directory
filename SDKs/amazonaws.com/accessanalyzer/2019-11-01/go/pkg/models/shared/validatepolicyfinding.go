package shared

// ValidatePolicyFinding
// A finding in a policy. Each finding is an actionable recommendation that can be used to improve the policy.
type ValidatePolicyFinding struct {
	FindingDetails string                        `json:"findingDetails"`
	FindingType    ValidatePolicyFindingTypeEnum `json:"findingType"`
	IssueCode      string                        `json:"issueCode"`
	LearnMoreLink  string                        `json:"learnMoreLink"`
	Locations      []Location                    `json:"locations"`
}
