package shared

type ListThingGroupsResponse struct {
	NextToken   *string           `json:"nextToken"`
	ThingGroups []GroupNameAndArn `json:"thingGroups"`
}
