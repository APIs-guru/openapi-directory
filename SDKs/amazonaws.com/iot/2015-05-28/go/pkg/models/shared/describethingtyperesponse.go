package shared

// DescribeThingTypeResponse
// The output for the DescribeThingType operation.
type DescribeThingTypeResponse struct {
	ThingTypeArn        *string              `json:"thingTypeArn,omitempty"`
	ThingTypeID         *string              `json:"thingTypeId,omitempty"`
	ThingTypeMetadata   *ThingTypeMetadata   `json:"thingTypeMetadata,omitempty"`
	ThingTypeName       *string              `json:"thingTypeName,omitempty"`
	ThingTypeProperties *ThingTypeProperties `json:"thingTypeProperties,omitempty"`
}
