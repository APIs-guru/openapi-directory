package shared

// CreateThingResponse
// The output of the CreateThing operation.
type CreateThingResponse struct {
	ThingArn  *string `json:"thingArn,omitempty"`
	ThingID   *string `json:"thingId,omitempty"`
	ThingName *string `json:"thingName,omitempty"`
}
