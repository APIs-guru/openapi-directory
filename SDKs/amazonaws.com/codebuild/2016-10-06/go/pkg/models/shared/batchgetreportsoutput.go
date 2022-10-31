package shared

type BatchGetReportsOutput struct {
	Reports         []Report `json:"reports,omitempty"`
	ReportsNotFound []string `json:"reportsNotFound,omitempty"`
}
