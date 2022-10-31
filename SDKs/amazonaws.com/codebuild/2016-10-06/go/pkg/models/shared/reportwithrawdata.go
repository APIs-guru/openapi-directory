package shared

type ReportWithRawData struct {
	Data      *string `json:"data,omitempty"`
	ReportArn *string `json:"reportArn,omitempty"`
}
