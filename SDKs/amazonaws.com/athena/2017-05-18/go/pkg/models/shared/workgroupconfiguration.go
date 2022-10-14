package shared

type WorkGroupConfiguration struct {
	BytesScannedCutoffPerQuery      *int64               `json:"BytesScannedCutoffPerQuery,omitempty"`
	EnforceWorkGroupConfiguration   *bool                `json:"EnforceWorkGroupConfiguration,omitempty"`
	EngineVersion                   *EngineVersion       `json:"EngineVersion,omitempty"`
	PublishCloudWatchMetricsEnabled *bool                `json:"PublishCloudWatchMetricsEnabled,omitempty"`
	RequesterPaysEnabled            *bool                `json:"RequesterPaysEnabled,omitempty"`
	ResultConfiguration             *ResultConfiguration `json:"ResultConfiguration,omitempty"`
}
