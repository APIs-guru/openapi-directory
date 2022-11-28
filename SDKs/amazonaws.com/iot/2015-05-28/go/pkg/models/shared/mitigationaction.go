package shared

// MitigationAction
// Describes which changes should be applied as part of a mitigation action.
type MitigationAction struct {
	ActionParams *MitigationActionParams `json:"actionParams,omitempty"`
	ID           *string                 `json:"id,omitempty"`
	Name         *string                 `json:"name,omitempty"`
	RoleArn      *string                 `json:"roleArn,omitempty"`
}
