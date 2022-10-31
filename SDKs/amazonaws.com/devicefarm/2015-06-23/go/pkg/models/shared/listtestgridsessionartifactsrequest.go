package shared



type ListTestGridSessionArtifactsRequest struct {
    MaxResult *int64 `json:"maxResult,omitempty"`
    NextToken *string `json:"nextToken,omitempty"`
    SessionArn string `json:"sessionArn"`
    Type *TestGridSessionArtifactCategoryEnum `json:"type,omitempty"`
    
}

