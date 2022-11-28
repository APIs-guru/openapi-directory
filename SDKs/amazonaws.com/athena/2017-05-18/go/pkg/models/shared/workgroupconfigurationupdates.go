package shared

// WorkGroupConfigurationUpdates
// The configuration information that will be updated for this workgroup, which includes the location in Amazon S3 where query results are stored, the encryption option, if any, used for query results, whether the Amazon CloudWatch Metrics are enabled for the workgroup, whether the workgroup settings override the client-side settings, and the data usage limit for the amount of bytes scanned per query, if it is specified.
type WorkGroupConfigurationUpdates struct {
	BytesScannedCutoffPerQuery       *int64                      `json:"BytesScannedCutoffPerQuery,omitempty"`
	EnforceWorkGroupConfiguration    *bool                       `json:"EnforceWorkGroupConfiguration,omitempty"`
	EngineVersion                    *EngineVersion              `json:"EngineVersion,omitempty"`
	PublishCloudWatchMetricsEnabled  *bool                       `json:"PublishCloudWatchMetricsEnabled,omitempty"`
	RemoveBytesScannedCutoffPerQuery *bool                       `json:"RemoveBytesScannedCutoffPerQuery,omitempty"`
	RequesterPaysEnabled             *bool                       `json:"RequesterPaysEnabled,omitempty"`
	ResultConfigurationUpdates       *ResultConfigurationUpdates `json:"ResultConfigurationUpdates,omitempty"`
}
