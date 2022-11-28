package shared

// ProjectFileSystemLocation
//
//	Information about a file system created by Amazon Elastic File System (EFS). For more information, see <a href="https://docs.aws.amazon.com/efs/latest/ug/whatisefs.html">What Is Amazon Elastic File System?</a>
type ProjectFileSystemLocation struct {
	Identifier   *string             `json:"identifier,omitempty"`
	Location     *string             `json:"location,omitempty"`
	MountOptions *string             `json:"mountOptions,omitempty"`
	MountPoint   *string             `json:"mountPoint,omitempty"`
	Type         *FileSystemTypeEnum `json:"type,omitempty"`
}
