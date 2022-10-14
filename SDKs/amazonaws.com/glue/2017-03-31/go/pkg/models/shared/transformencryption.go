package shared

type TransformEncryption struct {
	MlUserDataEncryption             *MlUserDataEncryption `json:"MlUserDataEncryption,omitempty"`
	TaskRunSecurityConfigurationName *string               `json:"TaskRunSecurityConfigurationName,omitempty"`
}
