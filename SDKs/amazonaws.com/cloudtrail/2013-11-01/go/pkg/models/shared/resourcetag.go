package shared



type ResourceTag struct {
    ResourceID *string `json:"ResourceId,omitempty"`
    TagsList []Tag `json:"TagsList,omitempty"`
    
}

