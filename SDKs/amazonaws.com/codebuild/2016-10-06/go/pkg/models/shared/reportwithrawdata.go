package shared

// ReportWithRawData
// Contains the unmodified data for the report. For more information, see .
type ReportWithRawData struct {
	Data      *string `json:"data,omitempty"`
	ReportArn *string `json:"reportArn,omitempty"`
}
