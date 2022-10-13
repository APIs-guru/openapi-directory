package shared

type UpsolverS3OutputFormatConfig struct {
	AggregationConfig *AggregationConfig `json:"aggregationConfig"`
	FileType          *FileTypeEnum      `json:"fileType"`
	PrefixConfig      PrefixConfig       `json:"prefixConfig"`
}
