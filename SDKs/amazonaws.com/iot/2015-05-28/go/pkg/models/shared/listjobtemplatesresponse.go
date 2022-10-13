package shared

type ListJobTemplatesResponse struct {
	JobTemplates []JobTemplateSummary `json:"jobTemplates"`
	NextToken    *string              `json:"nextToken"`
}
