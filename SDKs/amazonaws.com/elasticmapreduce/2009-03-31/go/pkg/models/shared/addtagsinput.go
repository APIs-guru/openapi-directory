package shared



type AddTagsInput struct {
    ResourceID string `json:"ResourceId"`
    Tags []Tag `json:"Tags"`
    
}

