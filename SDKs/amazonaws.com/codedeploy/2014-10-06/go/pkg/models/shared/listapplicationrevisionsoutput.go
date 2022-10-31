package shared



type ListApplicationRevisionsOutput struct {
    NextToken *string `json:"nextToken,omitempty"`
    Revisions []RevisionLocation `json:"revisions,omitempty"`
    
}

