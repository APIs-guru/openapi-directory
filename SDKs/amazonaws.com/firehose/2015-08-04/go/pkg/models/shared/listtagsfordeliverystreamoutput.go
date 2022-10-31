package shared



type ListTagsForDeliveryStreamOutput struct {
    HasMoreTags bool `json:"HasMoreTags"`
    Tags []Tag `json:"Tags"`
    
}

