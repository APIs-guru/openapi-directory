package shared

type PutAssetPropertyValueEntry struct {
	AssetID        *string              `json:"assetId"`
	EntryID        *string              `json:"entryId"`
	PropertyAlias  *string              `json:"propertyAlias"`
	PropertyID     *string              `json:"propertyId"`
	PropertyValues []AssetPropertyValue `json:"propertyValues"`
}
