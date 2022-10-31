package shared



type ActionTypeSettings struct {
    EntityURLTemplate *string `json:"entityUrlTemplate,omitempty"`
    ExecutionURLTemplate *string `json:"executionUrlTemplate,omitempty"`
    RevisionURLTemplate *string `json:"revisionUrlTemplate,omitempty"`
    ThirdPartyConfigurationURL *string `json:"thirdPartyConfigurationUrl,omitempty"`
    
}

