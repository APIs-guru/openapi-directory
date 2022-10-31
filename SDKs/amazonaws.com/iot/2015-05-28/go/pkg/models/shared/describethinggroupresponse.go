package shared



type DescribeThingGroupResponse struct {
    IndexName *string `json:"indexName,omitempty"`
    QueryString *string `json:"queryString,omitempty"`
    QueryVersion *string `json:"queryVersion,omitempty"`
    Status *DynamicGroupStatusEnum `json:"status,omitempty"`
    ThingGroupArn *string `json:"thingGroupArn,omitempty"`
    ThingGroupID *string `json:"thingGroupId,omitempty"`
    ThingGroupMetadata *ThingGroupMetadata `json:"thingGroupMetadata,omitempty"`
    ThingGroupName *string `json:"thingGroupName,omitempty"`
    ThingGroupProperties *ThingGroupProperties `json:"thingGroupProperties,omitempty"`
    Version *int64 `json:"version,omitempty"`
    
}

