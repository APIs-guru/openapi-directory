package shared

type DeviceRegistryEnrichActivity struct {
	Attribute string  `json:"attribute"`
	Name      string  `json:"name"`
	Next      *string `json:"next"`
	RoleArn   string  `json:"roleArn"`
	ThingName string  `json:"thingName"`
}
