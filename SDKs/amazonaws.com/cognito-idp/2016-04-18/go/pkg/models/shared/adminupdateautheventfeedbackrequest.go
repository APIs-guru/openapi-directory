package shared

type AdminUpdateAuthEventFeedbackRequest struct {
	EventID       string                `json:"EventId"`
	FeedbackValue FeedbackValueTypeEnum `json:"FeedbackValue"`
	UserPoolID    string                `json:"UserPoolId"`
	Username      string                `json:"Username"`
}
