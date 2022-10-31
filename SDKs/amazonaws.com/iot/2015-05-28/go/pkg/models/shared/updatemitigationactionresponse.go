package shared

type UpdateMitigationActionResponse struct {
	ActionArn *string `json:"actionArn,omitempty"`
	ActionID  *string `json:"actionId,omitempty"`
}
