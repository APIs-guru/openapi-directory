package shared



type SourceDefinitionSpecificationRead struct {
    ConnectionSpecification map[string]interface{} `json:"connectionSpecification,omitempty"`
    DocumentationURL *string `json:"documentationUrl,omitempty"`
    JobInfo SynchronousJobRead `json:"jobInfo"`
    SourceDefinitionID string `json:"sourceDefinitionId"`
    
}

