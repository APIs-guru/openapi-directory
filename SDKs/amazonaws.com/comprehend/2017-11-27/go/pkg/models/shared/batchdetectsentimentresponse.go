package shared



type BatchDetectSentimentResponse struct {
    ErrorList []BatchItemError `json:"ErrorList"`
    ResultList []BatchDetectSentimentItemResult `json:"ResultList"`
    
}

