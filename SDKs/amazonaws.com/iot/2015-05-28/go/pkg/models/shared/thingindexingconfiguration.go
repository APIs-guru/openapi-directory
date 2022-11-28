package shared

// ThingIndexingConfiguration
// The thing indexing configuration. For more information, see <a href="https://docs.aws.amazon.com/iot/latest/developerguide/managing-index.html">Managing Thing Indexing</a>.
type ThingIndexingConfiguration struct {
	CustomFields                  []Field                            `json:"customFields,omitempty"`
	ManagedFields                 []Field                            `json:"managedFields,omitempty"`
	ThingConnectivityIndexingMode *ThingConnectivityIndexingModeEnum `json:"thingConnectivityIndexingMode,omitempty"`
	ThingIndexingMode             ThingIndexingModeEnum              `json:"thingIndexingMode"`
}
