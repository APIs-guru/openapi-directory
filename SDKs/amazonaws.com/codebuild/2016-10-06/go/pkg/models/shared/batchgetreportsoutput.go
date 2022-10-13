package shared

type BatchGetReportsOutput struct {
	Reports         []Report `json:"reports"`
	ReportsNotFound []string `json:"reportsNotFound"`
}
