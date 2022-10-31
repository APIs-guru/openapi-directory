package shared



type SourceUpdate struct {
    ConnectionConfiguration interface{} `json:"connectionConfiguration"`
    Name string `json:"name"`
    SourceID string `json:"sourceId"`
    
}

