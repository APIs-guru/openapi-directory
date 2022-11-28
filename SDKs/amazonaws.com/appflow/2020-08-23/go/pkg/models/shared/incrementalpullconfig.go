package shared

// IncrementalPullConfig
//
//	Specifies the configuration used when importing incremental records from the source.
type IncrementalPullConfig struct {
	DatetimeTypeFieldName *string `json:"datetimeTypeFieldName,omitempty"`
}
