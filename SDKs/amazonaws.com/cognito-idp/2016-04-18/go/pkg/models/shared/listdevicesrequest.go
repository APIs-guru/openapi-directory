package shared



type ListDevicesRequest struct {
    AccessToken string `json:"AccessToken"`
    Limit *int64 `json:"Limit,omitempty"`
    PaginationToken *string `json:"PaginationToken,omitempty"`
    
}

