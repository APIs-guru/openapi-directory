package shared

type ProjectEnvironment struct {
	Certificate              *string                       `json:"certificate,omitempty"`
	ComputeType              ComputeTypeEnum               `json:"computeType"`
	EnvironmentVariables     []EnvironmentVariable         `json:"environmentVariables,omitempty"`
	Image                    string                        `json:"image"`
	ImagePullCredentialsType *ImagePullCredentialsTypeEnum `json:"imagePullCredentialsType,omitempty"`
	PrivilegedMode           *bool                         `json:"privilegedMode,omitempty"`
	RegistryCredential       *RegistryCredential           `json:"registryCredential,omitempty"`
	Type                     EnvironmentTypeEnum           `json:"type"`
}
