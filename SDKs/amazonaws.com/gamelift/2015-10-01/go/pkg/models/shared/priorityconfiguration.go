package shared



type PriorityConfiguration struct {
    LocationOrder []string `json:"LocationOrder,omitempty"`
    PriorityOrder []PriorityTypeEnum `json:"PriorityOrder,omitempty"`
    
}

