package shared

type AmiDistributionConfiguration struct {
	AmiTags          map[string]string              `json:"amiTags,omitempty"`
	Description      *string                        `json:"description,omitempty"`
	KmsKeyID         *string                        `json:"kmsKeyId,omitempty"`
	LaunchPermission *LaunchPermissionConfiguration `json:"launchPermission,omitempty"`
	Name             *string                        `json:"name,omitempty"`
	TargetAccountIds []string                       `json:"targetAccountIds,omitempty"`
}
