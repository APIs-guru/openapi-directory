package shared

// PosixUser
// The full POSIX identity, including the user ID, group ID, and any secondary group IDs, on the access point that is used for all file system operations performed by NFS clients using the access point.
type PosixUser struct {
	Gid           int64   `json:"Gid"`
	SecondaryGids []int64 `json:"SecondaryGids,omitempty"`
	UID           int64   `json:"Uid"`
}
