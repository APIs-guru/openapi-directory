package shared

type RecommendationSummary struct {
	Description            *string                     `json:"Description"`
	EndLine                *int64                      `json:"EndLine"`
	FilePath               *string                     `json:"FilePath"`
	RecommendationCategory *RecommendationCategoryEnum `json:"RecommendationCategory"`
	RecommendationID       *string                     `json:"RecommendationId"`
	RuleMetadata           *RuleMetadata               `json:"RuleMetadata"`
	Severity               *SeverityEnum               `json:"Severity"`
	StartLine              *int64                      `json:"StartLine"`
}
