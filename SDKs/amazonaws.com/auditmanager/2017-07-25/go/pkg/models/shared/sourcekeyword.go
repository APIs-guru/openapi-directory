package shared

type SourceKeyword struct {
	KeywordInputType *KeywordInputTypeEnum `json:"keywordInputType,omitempty"`
	KeywordValue     *string               `json:"keywordValue,omitempty"`
}
