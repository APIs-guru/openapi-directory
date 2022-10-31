package shared



type CreateLogPatternRequest struct {
    Pattern string `json:"Pattern"`
    PatternName string `json:"PatternName"`
    PatternSetName string `json:"PatternSetName"`
    Rank int64 `json:"Rank"`
    ResourceGroupName string `json:"ResourceGroupName"`
    
}

