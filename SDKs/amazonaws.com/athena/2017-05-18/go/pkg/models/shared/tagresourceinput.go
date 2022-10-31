package shared



type TagResourceInput struct {
    ResourceArn string `json:"ResourceARN"`
    Tags []Tag `json:"Tags"`
    
}

