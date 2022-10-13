package shared

type PossibleRemediationActions struct {
	Actions     []PossibleRemediationAction `json:"Actions"`
	Description *string                     `json:"Description"`
}
