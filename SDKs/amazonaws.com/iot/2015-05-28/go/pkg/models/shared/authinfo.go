package shared

// AuthInfo
// A collection of authorization information.
type AuthInfo struct {
	ActionType *ActionTypeEnum `json:"actionType,omitempty"`
	Resources  []string        `json:"resources"`
}
