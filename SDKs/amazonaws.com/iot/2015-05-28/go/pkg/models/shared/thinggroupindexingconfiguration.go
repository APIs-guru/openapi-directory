package shared

// ThingGroupIndexingConfiguration
// Thing group indexing configuration.
type ThingGroupIndexingConfiguration struct {
	CustomFields           []Field                    `json:"customFields,omitempty"`
	ManagedFields          []Field                    `json:"managedFields,omitempty"`
	ThingGroupIndexingMode ThingGroupIndexingModeEnum `json:"thingGroupIndexingMode"`
}
