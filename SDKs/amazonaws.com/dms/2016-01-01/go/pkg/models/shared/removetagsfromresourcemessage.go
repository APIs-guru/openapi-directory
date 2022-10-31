package shared



type RemoveTagsFromResourceMessage struct {
    ResourceArn string `json:"ResourceArn"`
    TagKeys []string `json:"TagKeys"`
    
}

