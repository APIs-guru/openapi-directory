package shared

type CreateMitigationActionResponse struct {
	ActionArn *string `json:"actionArn,omitempty"`
	ActionID  *string `json:"actionId,omitempty"`
}
