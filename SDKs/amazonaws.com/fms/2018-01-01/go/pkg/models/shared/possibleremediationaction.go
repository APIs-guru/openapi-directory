package shared

// PossibleRemediationAction
// A list of remediation actions.
type PossibleRemediationAction struct {
	Description               *string                      `json:"Description,omitempty"`
	IsDefaultAction           *bool                        `json:"IsDefaultAction,omitempty"`
	OrderedRemediationActions []RemediationActionWithOrder `json:"OrderedRemediationActions"`
}
