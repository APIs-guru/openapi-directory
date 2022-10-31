package shared



type TagResourceRequest struct {
    ResourceArn string `json:"ResourceArn"`
    TagList []Tag `json:"TagList"`
    
}

