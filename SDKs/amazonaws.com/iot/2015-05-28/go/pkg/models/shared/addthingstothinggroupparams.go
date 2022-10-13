package shared

type AddThingsToThingGroupParams struct {
	OverrideDynamicGroups *bool    `json:"overrideDynamicGroups"`
	ThingGroupNames       []string `json:"thingGroupNames"`
}
