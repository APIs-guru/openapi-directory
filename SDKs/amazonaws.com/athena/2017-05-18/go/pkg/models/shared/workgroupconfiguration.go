package shared

type WorkGroupConfiguration struct {
	BytesScannedCutoffPerQuery      *int64               `json:"BytesScannedCutoffPerQuery"`
	EnforceWorkGroupConfiguration   *bool                `json:"EnforceWorkGroupConfiguration"`
	EngineVersion                   *EngineVersion       `json:"EngineVersion"`
	PublishCloudWatchMetricsEnabled *bool                `json:"PublishCloudWatchMetricsEnabled"`
	RequesterPaysEnabled            *bool                `json:"RequesterPaysEnabled"`
	ResultConfiguration             *ResultConfiguration `json:"ResultConfiguration"`
}
