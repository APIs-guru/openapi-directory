package shared

type UpdateAuthEventFeedbackRequest struct {
	EventID       string                `json:"EventId"`
	FeedbackToken string                `json:"FeedbackToken"`
	FeedbackValue FeedbackValueTypeEnum `json:"FeedbackValue"`
	UserPoolID    string                `json:"UserPoolId"`
	Username      string                `json:"Username"`
}
