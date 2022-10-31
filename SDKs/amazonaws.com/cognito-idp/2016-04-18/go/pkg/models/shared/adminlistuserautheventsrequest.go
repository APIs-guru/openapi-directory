package shared



type AdminListUserAuthEventsRequest struct {
    MaxResults *int64 `json:"MaxResults,omitempty"`
    NextToken *string `json:"NextToken,omitempty"`
    UserPoolID string `json:"UserPoolId"`
    Username string `json:"Username"`
    
}

