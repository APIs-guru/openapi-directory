package shared

type PossibleRemediationActions struct {
	Actions     []PossibleRemediationAction `json:"Actions,omitempty"`
	Description *string                     `json:"Description,omitempty"`
}
