package shared



type CreateEventBusRequest struct {
    EventSourceName *string `json:"EventSourceName,omitempty"`
    Name string `json:"Name"`
    Tags []Tag `json:"Tags,omitempty"`
    
}

