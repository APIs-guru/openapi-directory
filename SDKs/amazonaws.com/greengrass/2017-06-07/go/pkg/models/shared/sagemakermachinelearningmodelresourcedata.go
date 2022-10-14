package shared

type SageMakerMachineLearningModelResourceData struct {
	DestinationPath *string                       `json:"DestinationPath,omitempty"`
	OwnerSetting    *ResourceDownloadOwnerSetting `json:"OwnerSetting,omitempty"`
	SageMakerJobArn *string                       `json:"SageMakerJobArn,omitempty"`
}
