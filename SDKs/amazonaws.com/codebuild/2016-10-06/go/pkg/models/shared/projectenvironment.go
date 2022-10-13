package shared

type ProjectEnvironment struct {
	Certificate              *string                       `json:"certificate"`
	ComputeType              ComputeTypeEnum               `json:"computeType"`
	EnvironmentVariables     []EnvironmentVariable         `json:"environmentVariables"`
	Image                    string                        `json:"image"`
	ImagePullCredentialsType *ImagePullCredentialsTypeEnum `json:"imagePullCredentialsType"`
	PrivilegedMode           *bool                         `json:"privilegedMode"`
	RegistryCredential       *RegistryCredential           `json:"registryCredential"`
	Type                     EnvironmentTypeEnum           `json:"type"`
}
