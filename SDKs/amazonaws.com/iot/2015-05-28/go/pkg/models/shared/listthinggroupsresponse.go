package shared



type ListThingGroupsResponse struct {
    NextToken *string `json:"nextToken,omitempty"`
    ThingGroups []GroupNameAndArn `json:"thingGroups,omitempty"`
    
}

