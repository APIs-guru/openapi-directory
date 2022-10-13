package shared

type DescribeThingTypeResponse struct {
	ThingTypeArn        *string              `json:"thingTypeArn"`
	ThingTypeID         *string              `json:"thingTypeId"`
	ThingTypeMetadata   *ThingTypeMetadata   `json:"thingTypeMetadata"`
	ThingTypeName       *string              `json:"thingTypeName"`
	ThingTypeProperties *ThingTypeProperties `json:"thingTypeProperties"`
}
