package shared



type DeleteLogPatternRequest struct {
    PatternName string `json:"PatternName"`
    PatternSetName string `json:"PatternSetName"`
    ResourceGroupName string `json:"ResourceGroupName"`
    
}

