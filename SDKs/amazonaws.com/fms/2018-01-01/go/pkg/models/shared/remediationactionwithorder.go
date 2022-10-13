package shared

type RemediationActionWithOrder struct {
	Order             *int64             `json:"Order"`
	RemediationAction *RemediationAction `json:"RemediationAction"`
}
