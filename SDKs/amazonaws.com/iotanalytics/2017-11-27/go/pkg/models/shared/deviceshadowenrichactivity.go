package shared

// DeviceShadowEnrichActivity
// An activity that adds information from the IoT Device Shadow service to a message.
type DeviceShadowEnrichActivity struct {
	Attribute string  `json:"attribute"`
	Name      string  `json:"name"`
	Next      *string `json:"next,omitempty"`
	RoleArn   string  `json:"roleArn"`
	ThingName string  `json:"thingName"`
}
