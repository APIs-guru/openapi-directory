package shared

// ListThingTypesResponse
// The output for the ListThingTypes operation.
type ListThingTypesResponse struct {
	NextToken  *string               `json:"nextToken,omitempty"`
	ThingTypes []ThingTypeDefinition `json:"thingTypes,omitempty"`
}
