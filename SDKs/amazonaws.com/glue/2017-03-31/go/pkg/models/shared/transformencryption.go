package shared

// TransformEncryption
// <p>The encryption-at-rest settings of the transform that apply to accessing user data. Machine learning transforms can access user data encrypted in Amazon S3 using KMS.</p> <p>Additionally, imported labels and trained transforms can now be encrypted using a customer provided KMS key.</p>
type TransformEncryption struct {
	MlUserDataEncryption             *MlUserDataEncryption `json:"MlUserDataEncryption,omitempty"`
	TaskRunSecurityConfigurationName *string               `json:"TaskRunSecurityConfigurationName,omitempty"`
}
