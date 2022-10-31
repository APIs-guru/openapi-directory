package shared



type EntityLabel struct {
    Name *PiiEntityTypeEnum `json:"Name,omitempty"`
    Score *float32 `json:"Score,omitempty"`
    
}

