package shared

// PutAssetPropertyValueEntry
// Contains a list of value updates for an asset property in the list of asset entries consumed by the <a href="https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_BatchPutAssetPropertyValue.html">BatchPutAssetPropertyValue</a> API operation.
type PutAssetPropertyValueEntry struct {
	AssetID        *string              `json:"assetId,omitempty"`
	EntryID        string               `json:"entryId"`
	PropertyAlias  *string              `json:"propertyAlias,omitempty"`
	PropertyID     *string              `json:"propertyId,omitempty"`
	PropertyValues []AssetPropertyValue `json:"propertyValues"`
}
