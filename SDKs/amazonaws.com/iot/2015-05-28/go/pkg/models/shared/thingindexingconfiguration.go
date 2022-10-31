package shared



type ThingIndexingConfiguration struct {
    CustomFields []Field `json:"customFields,omitempty"`
    ManagedFields []Field `json:"managedFields,omitempty"`
    ThingConnectivityIndexingMode *ThingConnectivityIndexingModeEnum `json:"thingConnectivityIndexingMode,omitempty"`
    ThingIndexingMode ThingIndexingModeEnum `json:"thingIndexingMode"`
    
}

