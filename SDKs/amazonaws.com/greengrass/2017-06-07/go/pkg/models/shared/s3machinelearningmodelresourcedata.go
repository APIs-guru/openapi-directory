package shared

type S3MachineLearningModelResourceData struct {
	DestinationPath *string                       `json:"DestinationPath,omitempty"`
	OwnerSetting    *ResourceDownloadOwnerSetting `json:"OwnerSetting,omitempty"`
	S3URI           *string                       `json:"S3Uri,omitempty"`
}
