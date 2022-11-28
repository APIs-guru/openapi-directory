package shared

// EfsVolumeConfiguration
// This parameter is specified when you are using an Amazon Elastic File System file system for task storage. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/efs-volumes.html">Amazon EFS Volumes</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.
type EfsVolumeConfiguration struct {
	AuthorizationConfig   *EfsAuthorizationConfig   `json:"authorizationConfig,omitempty"`
	FileSystemID          string                    `json:"fileSystemId"`
	RootDirectory         *string                   `json:"rootDirectory,omitempty"`
	TransitEncryption     *EfsTransitEncryptionEnum `json:"transitEncryption,omitempty"`
	TransitEncryptionPort *int64                    `json:"transitEncryptionPort,omitempty"`
}
