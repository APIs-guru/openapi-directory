package shared

// AddThingsToThingGroupParams
// Parameters used when defining a mitigation action that move a set of things to a thing group.
type AddThingsToThingGroupParams struct {
	OverrideDynamicGroups *bool    `json:"overrideDynamicGroups,omitempty"`
	ThingGroupNames       []string `json:"thingGroupNames"`
}
