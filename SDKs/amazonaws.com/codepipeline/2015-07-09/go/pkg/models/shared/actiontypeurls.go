package shared



type ActionTypeUrls struct {
    ConfigurationURL *string `json:"configurationUrl,omitempty"`
    EntityURLTemplate *string `json:"entityUrlTemplate,omitempty"`
    ExecutionURLTemplate *string `json:"executionUrlTemplate,omitempty"`
    RevisionURLTemplate *string `json:"revisionUrlTemplate,omitempty"`
    
}

