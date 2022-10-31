package shared



type DataRetrievalRule struct {
    BytesPerHour *int64 `json:"BytesPerHour,omitempty"`
    Strategy *string `json:"Strategy,omitempty"`
    
}

