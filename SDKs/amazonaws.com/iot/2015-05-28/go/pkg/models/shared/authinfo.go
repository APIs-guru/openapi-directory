package shared

type AuthInfo struct {
	ActionType *ActionTypeEnum `json:"actionType,omitempty"`
	Resources  []string        `json:"resources"`
}
