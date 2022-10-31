package shared



type BatchGetItemInput struct {
    RequestItems map[string]KeysAndAttributes `json:"RequestItems"`
    
}

