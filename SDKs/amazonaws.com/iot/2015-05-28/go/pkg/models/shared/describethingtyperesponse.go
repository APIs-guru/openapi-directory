package shared

type DescribeThingTypeResponse struct {
	ThingTypeArn        *string              `json:"thingTypeArn,omitempty"`
	ThingTypeID         *string              `json:"thingTypeId,omitempty"`
	ThingTypeMetadata   *ThingTypeMetadata   `json:"thingTypeMetadata,omitempty"`
	ThingTypeName       *string              `json:"thingTypeName,omitempty"`
	ThingTypeProperties *ThingTypeProperties `json:"thingTypeProperties,omitempty"`
}
