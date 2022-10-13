package shared

type GetIndexingConfigurationResponse struct {
	ThingGroupIndexingConfiguration *ThingGroupIndexingConfiguration `json:"thingGroupIndexingConfiguration"`
	ThingIndexingConfiguration      *ThingIndexingConfiguration      `json:"thingIndexingConfiguration"`
}
