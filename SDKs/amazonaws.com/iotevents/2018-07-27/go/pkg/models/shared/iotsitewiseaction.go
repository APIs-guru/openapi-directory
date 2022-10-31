package shared



type IotSiteWiseAction struct {
    AssetID *string `json:"assetId,omitempty"`
    EntryID *string `json:"entryId,omitempty"`
    PropertyAlias *string `json:"propertyAlias,omitempty"`
    PropertyID *string `json:"propertyId,omitempty"`
    PropertyValue *AssetPropertyValue `json:"propertyValue,omitempty"`
    
}

