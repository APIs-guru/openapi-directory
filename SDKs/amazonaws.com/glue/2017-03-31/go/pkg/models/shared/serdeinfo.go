package shared



type SerDeInfo struct {
    Name *string `json:"Name,omitempty"`
    Parameters map[string]string `json:"Parameters,omitempty"`
    SerializationLibrary *string `json:"SerializationLibrary,omitempty"`
    
}

