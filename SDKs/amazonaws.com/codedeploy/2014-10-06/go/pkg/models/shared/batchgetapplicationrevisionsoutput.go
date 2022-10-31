package shared



type BatchGetApplicationRevisionsOutput struct {
    ApplicationName *string `json:"applicationName,omitempty"`
    ErrorMessage *string `json:"errorMessage,omitempty"`
    Revisions []RevisionInfo `json:"revisions,omitempty"`
    
}

