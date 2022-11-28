package shared

// ResourceDataContainer
// A container for resource data. The container takes only one of the following supported resource data types: ”LocalDeviceResourceData”, ”LocalVolumeResourceData”, ”SageMakerMachineLearningModelResourceData”, ”S3MachineLearningModelResourceData”, ”SecretsManagerSecretResourceData”.
type ResourceDataContainer struct {
	LocalDeviceResourceData                   *LocalDeviceResourceData                   `json:"LocalDeviceResourceData,omitempty"`
	LocalVolumeResourceData                   *LocalVolumeResourceData                   `json:"LocalVolumeResourceData,omitempty"`
	S3MachineLearningModelResourceData        *S3MachineLearningModelResourceData        `json:"S3MachineLearningModelResourceData,omitempty"`
	SageMakerMachineLearningModelResourceData *SageMakerMachineLearningModelResourceData `json:"SageMakerMachineLearningModelResourceData,omitempty"`
	SecretsManagerSecretResourceData          *SecretsManagerSecretResourceData          `json:"SecretsManagerSecretResourceData,omitempty"`
}
