package shared



type ListArchiveRulesResponse struct {
    ArchiveRules []ArchiveRuleSummary `json:"archiveRules"`
    NextToken *string `json:"nextToken,omitempty"`
    
}

