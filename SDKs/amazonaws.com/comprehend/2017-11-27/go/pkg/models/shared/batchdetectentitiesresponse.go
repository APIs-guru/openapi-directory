package shared



type BatchDetectEntitiesResponse struct {
    ErrorList []BatchItemError `json:"ErrorList"`
    ResultList []BatchDetectEntitiesItemResult `json:"ResultList"`
    
}

