package shared

// DocumentClassifierInputDataConfig
// <p>The input properties for training a document classifier. </p> <p>For more information on how the input file is formatted, see <a>how-document-classification-training-data</a>. </p>
type DocumentClassifierInputDataConfig struct {
	AugmentedManifests []AugmentedManifestsListItem      `json:"AugmentedManifests,omitempty"`
	DataFormat         *DocumentClassifierDataFormatEnum `json:"DataFormat,omitempty"`
	LabelDelimiter     *string                           `json:"LabelDelimiter,omitempty"`
	S3URI              *string                           `json:"S3Uri,omitempty"`
}
