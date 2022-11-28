package shared

// InsightFeedback
//
//	Information about insight feedback received from a customer.
type InsightFeedback struct {
	Feedback *InsightFeedbackOptionEnum `json:"Feedback,omitempty"`
	ID       *string                    `json:"Id,omitempty"`
}
