package shared

type ListThingGroupsForThingResponse struct {
	NextToken   *string           `json:"nextToken,omitempty"`
	ThingGroups []GroupNameAndArn `json:"thingGroups,omitempty"`
}
