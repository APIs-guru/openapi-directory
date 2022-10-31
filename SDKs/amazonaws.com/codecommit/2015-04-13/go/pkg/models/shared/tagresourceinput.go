package shared



type TagResourceInput struct {
    ResourceArn string `json:"resourceArn"`
    Tags map[string]string `json:"tags"`
    
}

