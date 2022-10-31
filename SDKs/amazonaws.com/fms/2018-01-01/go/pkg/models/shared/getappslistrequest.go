package shared



type GetAppsListRequest struct {
    DefaultList *bool `json:"DefaultList,omitempty"`
    ListID string `json:"ListId"`
    
}

