package shared

// ActiveDirectoryBackupAttributes
// The Microsoft AD attributes of the Amazon FSx for Windows File Server file system.
type ActiveDirectoryBackupAttributes struct {
	ActiveDirectoryID *string `json:"ActiveDirectoryId,omitempty"`
	DomainName        *string `json:"DomainName,omitempty"`
	ResourceArn       *string `json:"ResourceARN,omitempty"`
}
