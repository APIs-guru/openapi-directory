package shared

type CompletionReport struct {
	Enabled bool              `json:"Enabled"`
	Format  *ReportFormatEnum `json:"Format"`
	Path    *string           `json:"Path"`
	Scope   *ReportScopeEnum  `json:"Scope"`
}
