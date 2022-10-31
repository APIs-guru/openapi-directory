package shared



type AssetModelStatus struct {
    Error *ErrorDetails `json:"error,omitempty"`
    State AssetModelStateEnum `json:"state"`
    
}

