package shared



type UpdateExperimentTemplateTargetInput struct {
    Filters []ExperimentTemplateTargetInputFilter `json:"filters,omitempty"`
    ResourceArns []string `json:"resourceArns,omitempty"`
    ResourceTags map[string]string `json:"resourceTags,omitempty"`
    ResourceType string `json:"resourceType"`
    SelectionMode string `json:"selectionMode"`
    
}

