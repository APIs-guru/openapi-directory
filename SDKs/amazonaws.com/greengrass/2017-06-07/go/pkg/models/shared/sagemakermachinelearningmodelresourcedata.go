package shared

type SageMakerMachineLearningModelResourceData struct {
	DestinationPath *string                       `json:"DestinationPath"`
	OwnerSetting    *ResourceDownloadOwnerSetting `json:"OwnerSetting"`
	SageMakerJobArn *string                       `json:"SageMakerJobArn"`
}
