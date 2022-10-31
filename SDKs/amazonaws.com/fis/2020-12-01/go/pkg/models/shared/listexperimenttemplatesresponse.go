package shared



type ListExperimentTemplatesResponse struct {
    ExperimentTemplates []ExperimentTemplateSummary `json:"experimentTemplates,omitempty"`
    NextToken *string `json:"nextToken,omitempty"`
    
}

