package shared

import (
	"time"
)

// SSHPublicKey
// <p>Contains information about an SSH public key.</p> <p>This data type is used as a response element in the <a>GetSSHPublicKey</a> and <a>UploadSSHPublicKey</a> operations. </p>
type SSHPublicKey struct {
	Fingerprint      string
	SSHPublicKeyBody string
	SSHPublicKeyID   string
	Status           StatusTypeEnum
	UploadDate       *time.Time
	UserName         string
}
