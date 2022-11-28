package shared

// DestinationConfig
// The destination configuration.
type DestinationConfig struct {
	Services  []string `json:"services"`
	ThingName *string  `json:"thingName,omitempty"`
}
