package shared

// ThingTypeDefinition
// The definition of the thing type, including thing type name and description.
type ThingTypeDefinition struct {
	ThingTypeArn        *string              `json:"thingTypeArn,omitempty"`
	ThingTypeMetadata   *ThingTypeMetadata   `json:"thingTypeMetadata,omitempty"`
	ThingTypeName       *string              `json:"thingTypeName,omitempty"`
	ThingTypeProperties *ThingTypeProperties `json:"thingTypeProperties,omitempty"`
}
