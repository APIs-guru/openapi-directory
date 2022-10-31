package shared



type AirbyteStreamAndConfiguration struct {
    Config *AirbyteStreamConfiguration `json:"config,omitempty"`
    Stream *AirbyteStream `json:"stream,omitempty"`
    
}

