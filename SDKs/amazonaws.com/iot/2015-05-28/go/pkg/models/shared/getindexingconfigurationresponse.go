package shared



type GetIndexingConfigurationResponse struct {
    ThingGroupIndexingConfiguration *ThingGroupIndexingConfiguration `json:"thingGroupIndexingConfiguration,omitempty"`
    ThingIndexingConfiguration *ThingIndexingConfiguration `json:"thingIndexingConfiguration,omitempty"`
    
}

