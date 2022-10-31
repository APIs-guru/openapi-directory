package shared



type BatchDetectDominantLanguageResponse struct {
    ErrorList []BatchItemError `json:"ErrorList"`
    ResultList []BatchDetectDominantLanguageItemResult `json:"ResultList"`
    
}

