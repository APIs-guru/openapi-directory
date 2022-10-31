package shared



type AddTagsToResourceRequest struct {
    ResourceID string `json:"ResourceId"`
    Tags []Tag `json:"Tags"`
    
}

