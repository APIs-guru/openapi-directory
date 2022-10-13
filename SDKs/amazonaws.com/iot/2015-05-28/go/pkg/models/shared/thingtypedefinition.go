package shared

type ThingTypeDefinition struct {
	ThingTypeArn        *string              `json:"thingTypeArn"`
	ThingTypeMetadata   *ThingTypeMetadata   `json:"thingTypeMetadata"`
	ThingTypeName       *string              `json:"thingTypeName"`
	ThingTypeProperties *ThingTypeProperties `json:"thingTypeProperties"`
}
