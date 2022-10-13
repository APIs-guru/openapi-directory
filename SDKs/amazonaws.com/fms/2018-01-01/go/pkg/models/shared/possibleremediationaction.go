package shared

type PossibleRemediationAction struct {
	Description               *string                      `json:"Description"`
	IsDefaultAction           *bool                        `json:"IsDefaultAction"`
	OrderedRemediationActions []RemediationActionWithOrder `json:"OrderedRemediationActions"`
}
