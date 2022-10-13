package shared

type ThingGroupIndexingConfiguration struct {
	CustomFields           []Field                    `json:"customFields"`
	ManagedFields          []Field                    `json:"managedFields"`
	ThingGroupIndexingMode ThingGroupIndexingModeEnum `json:"thingGroupIndexingMode"`
}
