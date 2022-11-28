package shared

// IotSiteWiseAssetModelPropertyIdentifier
//
//	The asset model property identifer of the input routed from AWS IoT SiteWise.
type IotSiteWiseAssetModelPropertyIdentifier struct {
	AssetModelID string `json:"assetModelId"`
	PropertyID   string `json:"propertyId"`
}
