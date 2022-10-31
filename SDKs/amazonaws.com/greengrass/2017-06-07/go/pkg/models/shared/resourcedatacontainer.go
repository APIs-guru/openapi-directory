package shared



type ResourceDataContainer struct {
    LocalDeviceResourceData *LocalDeviceResourceData `json:"LocalDeviceResourceData,omitempty"`
    LocalVolumeResourceData *LocalVolumeResourceData `json:"LocalVolumeResourceData,omitempty"`
    S3MachineLearningModelResourceData *S3MachineLearningModelResourceData `json:"S3MachineLearningModelResourceData,omitempty"`
    SageMakerMachineLearningModelResourceData *SageMakerMachineLearningModelResourceData `json:"SageMakerMachineLearningModelResourceData,omitempty"`
    SecretsManagerSecretResourceData *SecretsManagerSecretResourceData `json:"SecretsManagerSecretResourceData,omitempty"`
    
}

