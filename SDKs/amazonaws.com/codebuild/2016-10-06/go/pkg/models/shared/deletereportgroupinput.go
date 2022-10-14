package shared

type DeleteReportGroupInput struct {
	Arn           string `json:"arn"`
	DeleteReports *bool  `json:"deleteReports,omitempty"`
}
