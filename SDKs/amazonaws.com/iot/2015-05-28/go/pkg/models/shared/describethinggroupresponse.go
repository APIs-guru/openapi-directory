package shared

type DescribeThingGroupResponse struct {
	IndexName            *string                 `json:"indexName"`
	QueryString          *string                 `json:"queryString"`
	QueryVersion         *string                 `json:"queryVersion"`
	Status               *DynamicGroupStatusEnum `json:"status"`
	ThingGroupArn        *string                 `json:"thingGroupArn"`
	ThingGroupID         *string                 `json:"thingGroupId"`
	ThingGroupMetadata   *ThingGroupMetadata     `json:"thingGroupMetadata"`
	ThingGroupName       *string                 `json:"thingGroupName"`
	ThingGroupProperties *ThingGroupProperties   `json:"thingGroupProperties"`
	Version              *int64                  `json:"version"`
}
