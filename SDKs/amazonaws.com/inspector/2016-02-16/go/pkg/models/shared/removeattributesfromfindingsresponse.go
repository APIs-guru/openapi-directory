package shared



type RemoveAttributesFromFindingsResponse struct {
    FailedItems map[string]FailedItemDetails `json:"failedItems"`
    
}

