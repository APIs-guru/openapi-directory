package shared



type AddTagsToResourceMessage struct {
    ResourceArn string `json:"ResourceArn"`
    Tags []Tag `json:"Tags"`
    
}

