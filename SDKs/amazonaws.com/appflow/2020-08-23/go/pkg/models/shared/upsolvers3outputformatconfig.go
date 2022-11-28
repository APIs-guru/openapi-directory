package shared

// UpsolverS3OutputFormatConfig
//
//	The configuration that determines how Amazon AppFlow formats the flow output data when Upsolver is used as the destination.
type UpsolverS3OutputFormatConfig struct {
	AggregationConfig *AggregationConfig `json:"aggregationConfig,omitempty"`
	FileType          *FileTypeEnum      `json:"fileType,omitempty"`
	PrefixConfig      PrefixConfig       `json:"prefixConfig"`
}
