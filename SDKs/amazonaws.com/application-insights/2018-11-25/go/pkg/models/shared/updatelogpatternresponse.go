package shared



type UpdateLogPatternResponse struct {
    LogPattern *LogPattern `json:"LogPattern,omitempty"`
    ResourceGroupName *string `json:"ResourceGroupName,omitempty"`
    
}

