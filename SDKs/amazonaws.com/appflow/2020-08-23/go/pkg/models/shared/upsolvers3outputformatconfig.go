package shared

type UpsolverS3OutputFormatConfig struct {
	AggregationConfig *AggregationConfig `json:"aggregationConfig,omitempty"`
	FileType          *FileTypeEnum      `json:"fileType,omitempty"`
	PrefixConfig      PrefixConfig       `json:"prefixConfig"`
}
