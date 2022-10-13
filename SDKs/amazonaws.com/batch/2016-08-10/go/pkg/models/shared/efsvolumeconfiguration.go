package shared

type EfsVolumeConfiguration struct {
	AuthorizationConfig   *EfsAuthorizationConfig   `json:"authorizationConfig"`
	FileSystemID          string                    `json:"fileSystemId"`
	RootDirectory         *string                   `json:"rootDirectory"`
	TransitEncryption     *EfsTransitEncryptionEnum `json:"transitEncryption"`
	TransitEncryptionPort *int64                    `json:"transitEncryptionPort"`
}
