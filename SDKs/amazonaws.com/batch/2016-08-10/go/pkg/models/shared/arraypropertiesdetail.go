package shared



type ArrayPropertiesDetail struct {
    Index *int64 `json:"index,omitempty"`
    Size *int64 `json:"size,omitempty"`
    StatusSummary map[string]int64 `json:"statusSummary,omitempty"`
    
}

