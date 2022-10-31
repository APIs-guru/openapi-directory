package shared

type SearchIndexResponse struct {
	NextToken   *string              `json:"nextToken,omitempty"`
	ThingGroups []ThingGroupDocument `json:"thingGroups,omitempty"`
	Things      []ThingDocument      `json:"things,omitempty"`
}
