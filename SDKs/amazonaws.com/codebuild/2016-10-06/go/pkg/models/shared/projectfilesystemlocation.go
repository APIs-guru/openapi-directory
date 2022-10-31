package shared

type ProjectFileSystemLocation struct {
	Identifier   *string             `json:"identifier,omitempty"`
	Location     *string             `json:"location,omitempty"`
	MountOptions *string             `json:"mountOptions,omitempty"`
	MountPoint   *string             `json:"mountPoint,omitempty"`
	Type         *FileSystemTypeEnum `json:"type,omitempty"`
}
