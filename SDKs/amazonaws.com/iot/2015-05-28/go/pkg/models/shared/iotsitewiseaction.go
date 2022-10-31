package shared



type IotSiteWiseAction struct {
    PutAssetPropertyValueEntries []PutAssetPropertyValueEntry `json:"putAssetPropertyValueEntries"`
    RoleArn string `json:"roleArn"`
    
}

