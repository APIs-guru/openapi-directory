package shared

type DocumentClassifierInputDataConfig struct {
	AugmentedManifests []AugmentedManifestsListItem      `json:"AugmentedManifests"`
	DataFormat         *DocumentClassifierDataFormatEnum `json:"DataFormat"`
	LabelDelimiter     *string                           `json:"LabelDelimiter"`
	S3URI              *string                           `json:"S3Uri"`
}
