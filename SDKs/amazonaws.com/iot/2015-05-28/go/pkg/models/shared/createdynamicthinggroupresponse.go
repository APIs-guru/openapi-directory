package shared

type CreateDynamicThingGroupResponse struct {
	IndexName      *string `json:"indexName,omitempty"`
	QueryString    *string `json:"queryString,omitempty"`
	QueryVersion   *string `json:"queryVersion,omitempty"`
	ThingGroupArn  *string `json:"thingGroupArn,omitempty"`
	ThingGroupID   *string `json:"thingGroupId,omitempty"`
	ThingGroupName *string `json:"thingGroupName,omitempty"`
}
