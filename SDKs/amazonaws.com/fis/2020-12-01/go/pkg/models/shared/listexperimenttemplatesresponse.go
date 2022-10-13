package shared

type ListExperimentTemplatesResponse struct {
	ExperimentTemplates []ExperimentTemplateSummary `json:"experimentTemplates"`
	NextToken           *string                     `json:"nextToken"`
}
