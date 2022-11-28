package shared

// SageMakerMachineLearningModelResourceData
// Attributes that define an Amazon SageMaker machine learning resource.
type SageMakerMachineLearningModelResourceData struct {
	DestinationPath *string                       `json:"DestinationPath,omitempty"`
	OwnerSetting    *ResourceDownloadOwnerSetting `json:"OwnerSetting,omitempty"`
	SageMakerJobArn *string                       `json:"SageMakerJobArn,omitempty"`
}
