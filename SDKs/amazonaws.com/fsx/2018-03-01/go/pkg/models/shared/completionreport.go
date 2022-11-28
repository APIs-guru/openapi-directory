package shared

// CompletionReport
// Provides a report detailing the data repository task results of the files processed that match the criteria specified in the report <code>Scope</code> parameter. FSx delivers the report to the file system's linked data repository in Amazon S3, using the path specified in the report <code>Path</code> parameter. You can specify whether or not a report gets generated for a task using the <code>Enabled</code> parameter.
type CompletionReport struct {
	Enabled bool              `json:"Enabled"`
	Format  *ReportFormatEnum `json:"Format,omitempty"`
	Path    *string           `json:"Path,omitempty"`
	Scope   *ReportScopeEnum  `json:"Scope,omitempty"`
}
