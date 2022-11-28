package shared

// SnowflakeMetadata
//
//	The connector metadata specific to Snowflake.
type SnowflakeMetadata struct {
	SupportedRegions []string `json:"supportedRegions,omitempty"`
}
