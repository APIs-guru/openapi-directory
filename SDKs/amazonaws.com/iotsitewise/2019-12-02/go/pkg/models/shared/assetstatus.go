package shared



type AssetStatus struct {
    Error *ErrorDetails `json:"error,omitempty"`
    State AssetStateEnum `json:"state"`
    
}

