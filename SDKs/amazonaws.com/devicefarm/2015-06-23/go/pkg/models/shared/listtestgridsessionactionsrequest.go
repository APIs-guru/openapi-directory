package shared



type ListTestGridSessionActionsRequest struct {
    MaxResult *int64 `json:"maxResult,omitempty"`
    NextToken *string `json:"nextToken,omitempty"`
    SessionArn string `json:"sessionArn"`
    
}

