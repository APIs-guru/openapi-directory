package shared

type CreateThingGroupResponse struct {
	ThingGroupArn  *string `json:"thingGroupArn"`
	ThingGroupID   *string `json:"thingGroupId"`
	ThingGroupName *string `json:"thingGroupName"`
}
