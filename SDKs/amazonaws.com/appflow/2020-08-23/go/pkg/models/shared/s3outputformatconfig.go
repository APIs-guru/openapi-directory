package shared



type S3OutputFormatConfig struct {
    AggregationConfig *AggregationConfig `json:"aggregationConfig,omitempty"`
    FileType *FileTypeEnum `json:"fileType,omitempty"`
    PrefixConfig *PrefixConfig `json:"prefixConfig,omitempty"`
    
}

