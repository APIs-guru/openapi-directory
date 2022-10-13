package shared

type SearchIndexResponse struct {
	NextToken   *string              `json:"nextToken"`
	ThingGroups []ThingGroupDocument `json:"thingGroups"`
	Things      []ThingDocument      `json:"things"`
}
