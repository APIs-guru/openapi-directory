package shared

// PutAssetPropertyValueEntry
// An asset property value entry containing the following information.
type PutAssetPropertyValueEntry struct {
	AssetID        *string              `json:"assetId,omitempty"`
	EntryID        *string              `json:"entryId,omitempty"`
	PropertyAlias  *string              `json:"propertyAlias,omitempty"`
	PropertyID     *string              `json:"propertyId,omitempty"`
	PropertyValues []AssetPropertyValue `json:"propertyValues"`
}
