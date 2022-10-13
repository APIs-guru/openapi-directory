package shared

type ListThingGroupsForThingResponse struct {
	NextToken   *string           `json:"nextToken"`
	ThingGroups []GroupNameAndArn `json:"thingGroups"`
}
