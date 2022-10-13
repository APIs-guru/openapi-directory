package shared

type SourceDefinitionSpecificationRead struct {
	ConnectionSpecification map[string]interface{} `json:"connectionSpecification"`
	DocumentationURL        *string                `json:"documentationUrl"`
	JobInfo                 SynchronousJobRead     `json:"jobInfo"`
	SourceDefinitionID      string                 `json:"sourceDefinitionId"`
}
