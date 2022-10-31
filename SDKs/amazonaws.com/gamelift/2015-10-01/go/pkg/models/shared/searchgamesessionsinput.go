package shared



type SearchGameSessionsInput struct {
    AliasID *string `json:"AliasId,omitempty"`
    FilterExpression *string `json:"FilterExpression,omitempty"`
    FleetID *string `json:"FleetId,omitempty"`
    Limit *int64 `json:"Limit,omitempty"`
    Location *string `json:"Location,omitempty"`
    NextToken *string `json:"NextToken,omitempty"`
    SortExpression *string `json:"SortExpression,omitempty"`
    
}

