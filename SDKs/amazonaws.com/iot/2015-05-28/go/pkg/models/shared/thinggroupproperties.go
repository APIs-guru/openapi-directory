package shared

// ThingGroupProperties
// Thing group properties.
type ThingGroupProperties struct {
	AttributePayload      *AttributePayload `json:"attributePayload,omitempty"`
	ThingGroupDescription *string           `json:"thingGroupDescription,omitempty"`
}
