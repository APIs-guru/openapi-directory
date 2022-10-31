package shared



type TagResourceInput struct {
    ResourceArn string `json:"ResourceArn"`
    Tags map[string]string `json:"Tags"`
    
}

