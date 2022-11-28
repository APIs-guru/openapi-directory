package shared

// IotSiteWiseAction
// Describes an action to send data from an MQTT message that triggered the rule to IoT SiteWise asset properties.
type IotSiteWiseAction struct {
	PutAssetPropertyValueEntries []PutAssetPropertyValueEntry `json:"putAssetPropertyValueEntries"`
	RoleArn                      string                       `json:"roleArn"`
}
