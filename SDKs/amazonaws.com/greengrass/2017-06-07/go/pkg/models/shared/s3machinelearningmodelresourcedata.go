package shared

type S3MachineLearningModelResourceData struct {
	DestinationPath *string                       `json:"DestinationPath"`
	OwnerSetting    *ResourceDownloadOwnerSetting `json:"OwnerSetting"`
	S3URI           *string                       `json:"S3Uri"`
}
