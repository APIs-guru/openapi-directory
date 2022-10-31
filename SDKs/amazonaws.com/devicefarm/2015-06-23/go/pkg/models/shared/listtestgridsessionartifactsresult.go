package shared



type ListTestGridSessionArtifactsResult struct {
    Artifacts []TestGridSessionArtifact `json:"artifacts,omitempty"`
    NextToken *string `json:"nextToken,omitempty"`
    
}

