package shared

type ResourceDataContainer struct {
	LocalDeviceResourceData                   *LocalDeviceResourceData                   `json:"LocalDeviceResourceData"`
	LocalVolumeResourceData                   *LocalVolumeResourceData                   `json:"LocalVolumeResourceData"`
	S3MachineLearningModelResourceData        *S3MachineLearningModelResourceData        `json:"S3MachineLearningModelResourceData"`
	SageMakerMachineLearningModelResourceData *SageMakerMachineLearningModelResourceData `json:"SageMakerMachineLearningModelResourceData"`
	SecretsManagerSecretResourceData          *SecretsManagerSecretResourceData          `json:"SecretsManagerSecretResourceData"`
}
