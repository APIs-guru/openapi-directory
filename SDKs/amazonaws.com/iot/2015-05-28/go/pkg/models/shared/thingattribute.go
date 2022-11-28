package shared

// ThingAttribute
// The properties of the thing, including thing name, thing type name, and a list of thing attributes.
type ThingAttribute struct {
	Attributes    map[string]string `json:"attributes,omitempty"`
	ThingArn      *string           `json:"thingArn,omitempty"`
	ThingName     *string           `json:"thingName,omitempty"`
	ThingTypeName *string           `json:"thingTypeName,omitempty"`
	Version       *int64            `json:"version,omitempty"`
}
