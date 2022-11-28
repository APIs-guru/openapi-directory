package shared

// RootDirectory
// Specifies the directory on the Amazon EFS file system that the access point provides access to. The access point exposes the specified file system path as the root directory of your file system to applications using the access point. NFS clients using the access point can only access data in the access point's <code>RootDirectory</code> and it's subdirectories.
type RootDirectory struct {
	CreationInfo *CreationInfo `json:"CreationInfo,omitempty"`
	Path         *string       `json:"Path,omitempty"`
}
