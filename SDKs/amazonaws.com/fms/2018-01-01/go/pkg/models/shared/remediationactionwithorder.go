package shared

type RemediationActionWithOrder struct {
	Order             *int64             `json:"Order,omitempty"`
	RemediationAction *RemediationAction `json:"RemediationAction,omitempty"`
}
