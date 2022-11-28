package shared

// Notifications
// <p>The Amazon Simple Notification Service (Amazon SNS) topic or topics to notify in order to report job status.</p> <important> <p>To receive notifications, you must also subscribe to the new topic in the Amazon SNS console.</p> </important>
type Notifications struct {
	Completed   *string `json:"Completed,omitempty"`
	Error       *string `json:"Error,omitempty"`
	Progressing *string `json:"Progressing,omitempty"`
	Warning     *string `json:"Warning,omitempty"`
}
