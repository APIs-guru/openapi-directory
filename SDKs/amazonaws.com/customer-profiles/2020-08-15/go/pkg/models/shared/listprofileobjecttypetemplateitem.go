package shared

// ListProfileObjectTypeTemplateItem
// A ProfileObjectTypeTemplate in a list of ProfileObjectTypeTemplates.
type ListProfileObjectTypeTemplateItem struct {
	SourceName   *string `json:"SourceName,omitempty"`
	SourceObject *string `json:"SourceObject,omitempty"`
	TemplateID   *string `json:"TemplateId,omitempty"`
}
