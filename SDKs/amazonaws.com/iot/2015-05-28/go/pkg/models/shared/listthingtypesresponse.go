package shared

type ListThingTypesResponse struct {
	NextToken  *string               `json:"nextToken"`
	ThingTypes []ThingTypeDefinition `json:"thingTypes"`
}
