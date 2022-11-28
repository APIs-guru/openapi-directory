package shared

// UserFeedback
// Feedback that can be submitted for each instance of an anomaly by the user. Feedback is be used for improvements in generating recommendations for the application.
type UserFeedback struct {
	Type FeedbackTypeEnum `json:"type"`
}
