package shared

type CreateThingResponse struct {
	ThingArn  *string `json:"thingArn"`
	ThingID   *string `json:"thingId"`
	ThingName *string `json:"thingName"`
}
