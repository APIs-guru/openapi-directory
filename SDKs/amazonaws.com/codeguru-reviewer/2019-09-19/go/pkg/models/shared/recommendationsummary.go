package shared



type RecommendationSummary struct {
    Description *string `json:"Description,omitempty"`
    EndLine *int64 `json:"EndLine,omitempty"`
    FilePath *string `json:"FilePath,omitempty"`
    RecommendationCategory *RecommendationCategoryEnum `json:"RecommendationCategory,omitempty"`
    RecommendationID *string `json:"RecommendationId,omitempty"`
    RuleMetadata *RuleMetadata `json:"RuleMetadata,omitempty"`
    Severity *SeverityEnum `json:"Severity,omitempty"`
    StartLine *int64 `json:"StartLine,omitempty"`
    
}

