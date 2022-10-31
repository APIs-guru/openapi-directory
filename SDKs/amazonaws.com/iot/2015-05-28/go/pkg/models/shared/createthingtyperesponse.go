package shared

type CreateThingTypeResponse struct {
	ThingTypeArn  *string `json:"thingTypeArn,omitempty"`
	ThingTypeID   *string `json:"thingTypeId,omitempty"`
	ThingTypeName *string `json:"thingTypeName,omitempty"`
}
