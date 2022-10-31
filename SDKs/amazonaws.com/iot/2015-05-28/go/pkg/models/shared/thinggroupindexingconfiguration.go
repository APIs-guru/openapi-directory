package shared



type ThingGroupIndexingConfiguration struct {
    CustomFields []Field `json:"customFields,omitempty"`
    ManagedFields []Field `json:"managedFields,omitempty"`
    ThingGroupIndexingMode ThingGroupIndexingModeEnum `json:"thingGroupIndexingMode"`
    
}

