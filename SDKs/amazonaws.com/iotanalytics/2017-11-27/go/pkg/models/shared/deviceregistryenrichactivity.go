package shared

// DeviceRegistryEnrichActivity
// An activity that adds data from the IoT device registry to your message.
type DeviceRegistryEnrichActivity struct {
	Attribute string  `json:"attribute"`
	Name      string  `json:"name"`
	Next      *string `json:"next,omitempty"`
	RoleArn   string  `json:"roleArn"`
	ThingName string  `json:"thingName"`
}
