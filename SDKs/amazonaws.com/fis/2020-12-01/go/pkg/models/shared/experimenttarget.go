package shared



type ExperimentTarget struct {
    Filters []ExperimentTargetFilter `json:"filters,omitempty"`
    ResourceArns []string `json:"resourceArns,omitempty"`
    ResourceTags map[string]string `json:"resourceTags,omitempty"`
    ResourceType *string `json:"resourceType,omitempty"`
    SelectionMode *string `json:"selectionMode,omitempty"`
    
}

