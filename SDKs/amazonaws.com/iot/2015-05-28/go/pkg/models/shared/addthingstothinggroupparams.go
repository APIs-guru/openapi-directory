package shared

type AddThingsToThingGroupParams struct {
	OverrideDynamicGroups *bool    `json:"overrideDynamicGroups,omitempty"`
	ThingGroupNames       []string `json:"thingGroupNames"`
}
