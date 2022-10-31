package shared



type WorkGroupConfigurationUpdates struct {
    BytesScannedCutoffPerQuery *int64 `json:"BytesScannedCutoffPerQuery,omitempty"`
    EnforceWorkGroupConfiguration *bool `json:"EnforceWorkGroupConfiguration,omitempty"`
    EngineVersion *EngineVersion `json:"EngineVersion,omitempty"`
    PublishCloudWatchMetricsEnabled *bool `json:"PublishCloudWatchMetricsEnabled,omitempty"`
    RemoveBytesScannedCutoffPerQuery *bool `json:"RemoveBytesScannedCutoffPerQuery,omitempty"`
    RequesterPaysEnabled *bool `json:"RequesterPaysEnabled,omitempty"`
    ResultConfigurationUpdates *ResultConfigurationUpdates `json:"ResultConfigurationUpdates,omitempty"`
    
}

