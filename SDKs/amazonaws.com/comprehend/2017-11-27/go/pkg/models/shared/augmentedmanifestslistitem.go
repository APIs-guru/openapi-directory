package shared

// AugmentedManifestsListItem
// An augmented manifest file that provides training data for your custom model. An augmented manifest file is a labeled dataset that is produced by Amazon SageMaker Ground Truth.
type AugmentedManifestsListItem struct {
	AnnotationDataS3URI  *string                                   `json:"AnnotationDataS3Uri,omitempty"`
	AttributeNames       []string                                  `json:"AttributeNames"`
	DocumentType         *AugmentedManifestsDocumentTypeFormatEnum `json:"DocumentType,omitempty"`
	S3URI                string                                    `json:"S3Uri"`
	SourceDocumentsS3URI *string                                   `json:"SourceDocumentsS3Uri,omitempty"`
}
