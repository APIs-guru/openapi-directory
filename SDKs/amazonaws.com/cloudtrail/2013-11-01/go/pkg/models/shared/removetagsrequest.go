package shared



type RemoveTagsRequest struct {
    ResourceID string `json:"ResourceId"`
    TagsList []Tag `json:"TagsList,omitempty"`
    
}

