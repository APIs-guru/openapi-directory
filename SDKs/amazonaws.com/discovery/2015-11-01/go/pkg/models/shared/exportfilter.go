package shared

// ExportFilter
// Used to select which agent's data is to be exported. A single agent ID may be selected for export using the <a href="http://docs.aws.amazon.com/application-discovery/latest/APIReference/API_StartExportTask.html">StartExportTask</a> action.
type ExportFilter struct {
	Condition string   `json:"condition"`
	Name      string   `json:"name"`
	Values    []string `json:"values"`
}
