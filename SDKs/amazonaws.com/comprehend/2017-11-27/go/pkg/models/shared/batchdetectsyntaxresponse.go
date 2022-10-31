package shared



type BatchDetectSyntaxResponse struct {
    ErrorList []BatchItemError `json:"ErrorList"`
    ResultList []BatchDetectSyntaxItemResult `json:"ResultList"`
    
}

