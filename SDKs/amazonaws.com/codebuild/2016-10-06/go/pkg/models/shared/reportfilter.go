package shared

// ReportFilter
//
//	A filter used to return reports with the status specified by the input <code>status</code> parameter.
type ReportFilter struct {
	Status *ReportStatusTypeEnum `json:"status,omitempty"`
}
