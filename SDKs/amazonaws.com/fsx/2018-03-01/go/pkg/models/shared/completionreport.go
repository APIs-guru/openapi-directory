package shared



type CompletionReport struct {
    Enabled bool `json:"Enabled"`
    Format *ReportFormatEnum `json:"Format,omitempty"`
    Path *string `json:"Path,omitempty"`
    Scope *ReportScopeEnum `json:"Scope,omitempty"`
    
}

