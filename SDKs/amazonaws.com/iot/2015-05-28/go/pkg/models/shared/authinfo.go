package shared

type AuthInfo struct {
	ActionType *ActionTypeEnum `json:"actionType"`
	Resources  []string        `json:"resources"`
}
