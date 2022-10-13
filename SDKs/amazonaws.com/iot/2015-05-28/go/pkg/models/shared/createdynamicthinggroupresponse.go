package shared

type CreateDynamicThingGroupResponse struct {
	IndexName      *string `json:"indexName"`
	QueryString    *string `json:"queryString"`
	QueryVersion   *string `json:"queryVersion"`
	ThingGroupArn  *string `json:"thingGroupArn"`
	ThingGroupID   *string `json:"thingGroupId"`
	ThingGroupName *string `json:"thingGroupName"`
}
