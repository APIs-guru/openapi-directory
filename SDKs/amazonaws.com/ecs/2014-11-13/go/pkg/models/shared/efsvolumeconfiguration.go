package shared

type EfsVolumeConfiguration struct {
	AuthorizationConfig   *EfsAuthorizationConfig   `json:"authorizationConfig,omitempty"`
	FileSystemID          string                    `json:"fileSystemId"`
	RootDirectory         *string                   `json:"rootDirectory,omitempty"`
	TransitEncryption     *EfsTransitEncryptionEnum `json:"transitEncryption,omitempty"`
	TransitEncryptionPort *int64                    `json:"transitEncryptionPort,omitempty"`
}
