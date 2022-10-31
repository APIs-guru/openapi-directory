package shared



type AddTagsToResourceRequest struct {
    ResourceArn string `json:"ResourceArn"`
    TagList []Tag `json:"TagList"`
    
}

