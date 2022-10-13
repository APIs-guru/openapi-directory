package shared

type CreateThingTypeResponse struct {
	ThingTypeArn  *string `json:"thingTypeArn"`
	ThingTypeID   *string `json:"thingTypeId"`
	ThingTypeName *string `json:"thingTypeName"`
}
