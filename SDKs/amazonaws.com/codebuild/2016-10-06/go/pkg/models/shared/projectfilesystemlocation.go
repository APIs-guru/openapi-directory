package shared

type ProjectFileSystemLocation struct {
	Identifier   *string             `json:"identifier"`
	Location     *string             `json:"location"`
	MountOptions *string             `json:"mountOptions"`
	MountPoint   *string             `json:"mountPoint"`
	Type         *FileSystemTypeEnum `json:"type"`
}
