package shared

type DeviceShadowEnrichActivity struct {
	Attribute string  `json:"attribute"`
	Name      string  `json:"name"`
	Next      *string `json:"next,omitempty"`
	RoleArn   string  `json:"roleArn"`
	ThingName string  `json:"thingName"`
}
