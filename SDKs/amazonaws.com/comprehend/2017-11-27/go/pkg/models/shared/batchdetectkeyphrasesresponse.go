package shared

type BatchDetectKeyPhrasesResponse struct {
	ErrorList  []BatchItemError                  `json:"ErrorList"`
	ResultList []BatchDetectKeyPhrasesItemResult `json:"ResultList"`
}
