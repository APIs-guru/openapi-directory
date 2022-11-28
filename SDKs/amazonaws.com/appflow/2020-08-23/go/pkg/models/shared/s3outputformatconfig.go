package shared

// S3OutputFormatConfig
//
//	The configuration that determines how Amazon AppFlow should format the flow output data when Amazon S3 is used as the destination.
type S3OutputFormatConfig struct {
	AggregationConfig *AggregationConfig `json:"aggregationConfig,omitempty"`
	FileType          *FileTypeEnum      `json:"fileType,omitempty"`
	PrefixConfig      *PrefixConfig      `json:"prefixConfig,omitempty"`
}
