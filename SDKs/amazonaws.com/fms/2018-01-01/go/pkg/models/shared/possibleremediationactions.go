package shared

// PossibleRemediationActions
// A list of possible remediation action lists. Each individual possible remediation action is a list of individual remediation actions.
type PossibleRemediationActions struct {
	Actions     []PossibleRemediationAction `json:"Actions,omitempty"`
	Description *string                     `json:"Description,omitempty"`
}
