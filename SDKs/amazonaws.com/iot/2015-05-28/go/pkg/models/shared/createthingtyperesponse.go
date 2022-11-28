package shared

// CreateThingTypeResponse
// The output of the CreateThingType operation.
type CreateThingTypeResponse struct {
	ThingTypeArn  *string `json:"thingTypeArn,omitempty"`
	ThingTypeID   *string `json:"thingTypeId,omitempty"`
	ThingTypeName *string `json:"thingTypeName,omitempty"`
}
