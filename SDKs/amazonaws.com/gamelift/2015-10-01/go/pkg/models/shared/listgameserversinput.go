package shared



type ListGameServersInput struct {
    GameServerGroupName string `json:"GameServerGroupName"`
    Limit *int64 `json:"Limit,omitempty"`
    NextToken *string `json:"NextToken,omitempty"`
    SortOrder *SortOrderEnum `json:"SortOrder,omitempty"`
    
}

