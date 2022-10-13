package shared

type IotSiteWiseAction struct {
	AssetID       *string             `json:"assetId"`
	EntryID       *string             `json:"entryId"`
	PropertyAlias *string             `json:"propertyAlias"`
	PropertyID    *string             `json:"propertyId"`
	PropertyValue *AssetPropertyValue `json:"propertyValue"`
}
