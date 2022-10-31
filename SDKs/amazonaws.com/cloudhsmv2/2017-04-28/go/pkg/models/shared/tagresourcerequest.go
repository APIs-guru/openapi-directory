package shared



type TagResourceRequest struct {
    ResourceID string `json:"ResourceId"`
    TagList []Tag `json:"TagList"`
    
}

