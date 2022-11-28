package shared

// EfsVolumeConfiguration
// This is used when you're using an Amazon Elastic File System file system for job storage. For more information, see <a href="https://docs.aws.amazon.com/batch/latest/userguide/efs-volumes.html">Amazon EFS Volumes</a> in the <i>Batch User Guide</i>.
type EfsVolumeConfiguration struct {
	AuthorizationConfig   *EfsAuthorizationConfig   `json:"authorizationConfig,omitempty"`
	FileSystemID          string                    `json:"fileSystemId"`
	RootDirectory         *string                   `json:"rootDirectory,omitempty"`
	TransitEncryption     *EfsTransitEncryptionEnum `json:"transitEncryption,omitempty"`
	TransitEncryptionPort *int64                    `json:"transitEncryptionPort,omitempty"`
}
