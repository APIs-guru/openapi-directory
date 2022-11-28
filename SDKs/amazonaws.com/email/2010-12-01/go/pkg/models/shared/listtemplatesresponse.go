package shared

type ListTemplatesResponse struct {
	NextToken         *string
	TemplatesMetadata []TemplateMetadata
}
