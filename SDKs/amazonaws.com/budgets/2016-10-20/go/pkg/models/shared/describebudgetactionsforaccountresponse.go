package shared



type DescribeBudgetActionsForAccountResponse struct {
    Actions []Action `json:"Actions"`
    NextToken *string `json:"NextToken,omitempty"`
    
}

