package shared



type PutAssetPropertyValueEntry struct {
    AssetID *string `json:"assetId,omitempty"`
    EntryID string `json:"entryId"`
    PropertyAlias *string `json:"propertyAlias,omitempty"`
    PropertyID *string `json:"propertyId,omitempty"`
    PropertyValues []AssetPropertyValue `json:"propertyValues"`
    
}

