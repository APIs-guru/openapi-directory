package shared

type InsightFeedback struct {
	Feedback *InsightFeedbackOptionEnum `json:"Feedback"`
	ID       *string                    `json:"Id"`
}
