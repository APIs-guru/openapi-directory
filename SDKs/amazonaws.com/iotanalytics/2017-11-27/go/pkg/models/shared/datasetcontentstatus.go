package shared



type DatasetContentStatus struct {
    Reason *string `json:"reason,omitempty"`
    State *DatasetContentStateEnum `json:"state,omitempty"`
    
}

