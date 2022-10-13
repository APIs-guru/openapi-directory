package shared

type SourceKeyword struct {
	KeywordInputType *KeywordInputTypeEnum `json:"keywordInputType"`
	KeywordValue     *string               `json:"keywordValue"`
}
