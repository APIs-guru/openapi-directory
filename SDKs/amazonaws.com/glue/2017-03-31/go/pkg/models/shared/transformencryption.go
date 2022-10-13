package shared

type TransformEncryption struct {
	MlUserDataEncryption             *MlUserDataEncryption `json:"MlUserDataEncryption"`
	TaskRunSecurityConfigurationName *string               `json:"TaskRunSecurityConfigurationName"`
}
