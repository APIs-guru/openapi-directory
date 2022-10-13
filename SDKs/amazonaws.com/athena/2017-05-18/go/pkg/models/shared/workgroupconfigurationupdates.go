package shared

type WorkGroupConfigurationUpdates struct {
	BytesScannedCutoffPerQuery       *int64                      `json:"BytesScannedCutoffPerQuery"`
	EnforceWorkGroupConfiguration    *bool                       `json:"EnforceWorkGroupConfiguration"`
	EngineVersion                    *EngineVersion              `json:"EngineVersion"`
	PublishCloudWatchMetricsEnabled  *bool                       `json:"PublishCloudWatchMetricsEnabled"`
	RemoveBytesScannedCutoffPerQuery *bool                       `json:"RemoveBytesScannedCutoffPerQuery"`
	RequesterPaysEnabled             *bool                       `json:"RequesterPaysEnabled"`
	ResultConfigurationUpdates       *ResultConfigurationUpdates `json:"ResultConfigurationUpdates"`
}
