package shared

type ListThingTypesResponse struct {
	NextToken  *string               `json:"nextToken,omitempty"`
	ThingTypes []ThingTypeDefinition `json:"thingTypes,omitempty"`
}
