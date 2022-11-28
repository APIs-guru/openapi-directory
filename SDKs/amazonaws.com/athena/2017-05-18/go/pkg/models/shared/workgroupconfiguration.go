package shared

// WorkGroupConfiguration
// The configuration of the workgroup, which includes the location in Amazon S3 where query results are stored, the encryption option, if any, used for query results, whether the Amazon CloudWatch Metrics are enabled for the workgroup and whether workgroup settings override query settings, and the data usage limits for the amount of data scanned per query or per workgroup. The workgroup settings override is specified in <code>EnforceWorkGroupConfiguration</code> (true/false) in the <code>WorkGroupConfiguration</code>. See <a>WorkGroupConfiguration$EnforceWorkGroupConfiguration</a>.
type WorkGroupConfiguration struct {
	BytesScannedCutoffPerQuery      *int64               `json:"BytesScannedCutoffPerQuery,omitempty"`
	EnforceWorkGroupConfiguration   *bool                `json:"EnforceWorkGroupConfiguration,omitempty"`
	EngineVersion                   *EngineVersion       `json:"EngineVersion,omitempty"`
	PublishCloudWatchMetricsEnabled *bool                `json:"PublishCloudWatchMetricsEnabled,omitempty"`
	RequesterPaysEnabled            *bool                `json:"RequesterPaysEnabled,omitempty"`
	ResultConfiguration             *ResultConfiguration `json:"ResultConfiguration,omitempty"`
}
