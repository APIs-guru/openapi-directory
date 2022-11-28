package shared

import (
	"time"
)

// SSHPublicKeyMetadata
// <p>Contains information about an SSH public key, without the key's body or fingerprint.</p> <p>This data type is used as a response element in the <a>ListSSHPublicKeys</a> operation.</p>
type SSHPublicKeyMetadata struct {
	SSHPublicKeyID string
	Status         StatusTypeEnum
	UploadDate     time.Time
	UserName       string
}
