package shared

type AmiDistributionConfiguration struct {
	AmiTags          map[string]string              `json:"amiTags"`
	Description      *string                        `json:"description"`
	KmsKeyID         *string                        `json:"kmsKeyId"`
	LaunchPermission *LaunchPermissionConfiguration `json:"launchPermission"`
	Name             *string                        `json:"name"`
	TargetAccountIds []string                       `json:"targetAccountIds"`
}
