package shared

type ThingIndexingConfiguration struct {
	CustomFields                  []Field                            `json:"customFields"`
	ManagedFields                 []Field                            `json:"managedFields"`
	ThingConnectivityIndexingMode *ThingConnectivityIndexingModeEnum `json:"thingConnectivityIndexingMode"`
	ThingIndexingMode             ThingIndexingModeEnum              `json:"thingIndexingMode"`
}
