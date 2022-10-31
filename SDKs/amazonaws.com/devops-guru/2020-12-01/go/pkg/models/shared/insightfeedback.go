package shared

type InsightFeedback struct {
	Feedback *InsightFeedbackOptionEnum `json:"Feedback,omitempty"`
	ID       *string                    `json:"Id,omitempty"`
}
