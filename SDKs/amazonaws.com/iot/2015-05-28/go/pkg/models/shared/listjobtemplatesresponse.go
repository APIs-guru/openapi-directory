package shared

type ListJobTemplatesResponse struct {
	JobTemplates []JobTemplateSummary `json:"jobTemplates,omitempty"`
	NextToken    *string              `json:"nextToken,omitempty"`
}
