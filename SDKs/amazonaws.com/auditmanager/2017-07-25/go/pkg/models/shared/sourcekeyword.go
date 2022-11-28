package shared

// SourceKeyword
//
//	The keyword to search for in CloudTrail logs, Config rules, Security Hub checks, and Amazon Web Services API names.
type SourceKeyword struct {
	KeywordInputType *KeywordInputTypeEnum `json:"keywordInputType,omitempty"`
	KeywordValue     *string               `json:"keywordValue,omitempty"`
}
