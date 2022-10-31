package shared



type DocumentClassifierInputDataConfig struct {
    AugmentedManifests []AugmentedManifestsListItem `json:"AugmentedManifests,omitempty"`
    DataFormat *DocumentClassifierDataFormatEnum `json:"DataFormat,omitempty"`
    LabelDelimiter *string `json:"LabelDelimiter,omitempty"`
    S3URI *string `json:"S3Uri,omitempty"`
    
}

