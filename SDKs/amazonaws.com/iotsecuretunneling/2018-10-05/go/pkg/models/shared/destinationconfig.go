package shared



type DestinationConfig struct {
    Services []string `json:"services"`
    ThingName *string `json:"thingName,omitempty"`
    
}

