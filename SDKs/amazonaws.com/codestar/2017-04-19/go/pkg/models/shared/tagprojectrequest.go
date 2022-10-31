package shared



type TagProjectRequest struct {
    ID string `json:"id"`
    Tags map[string]string `json:"tags"`
    
}

