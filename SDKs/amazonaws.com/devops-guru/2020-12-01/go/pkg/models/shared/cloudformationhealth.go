package shared



type CloudFormationHealth struct {
    Insight *InsightHealth `json:"Insight,omitempty"`
    StackName *string `json:"StackName,omitempty"`
    
}

