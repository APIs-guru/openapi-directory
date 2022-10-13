package shared

type ThingGroupDocument struct {
	Attributes            map[string]string `json:"attributes"`
	ParentGroupNames      []string          `json:"parentGroupNames"`
	ThingGroupDescription *string           `json:"thingGroupDescription"`
	ThingGroupID          *string           `json:"thingGroupId"`
	ThingGroupName        *string           `json:"thingGroupName"`
}
