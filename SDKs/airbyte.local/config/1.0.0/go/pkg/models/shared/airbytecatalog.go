package shared



type AirbyteCatalog struct {
    Streams []AirbyteStreamAndConfiguration `json:"streams"`
    
}

