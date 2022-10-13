package shared

type AugmentedManifestsListItem struct {
	AnnotationDataS3URI  *string                                   `json:"AnnotationDataS3Uri"`
	AttributeNames       []string                                  `json:"AttributeNames"`
	DocumentType         *AugmentedManifestsDocumentTypeFormatEnum `json:"DocumentType"`
	S3URI                string                                    `json:"S3Uri"`
	SourceDocumentsS3URI *string                                   `json:"SourceDocumentsS3Uri"`
}
