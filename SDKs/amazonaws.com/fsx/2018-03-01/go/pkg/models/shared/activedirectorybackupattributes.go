package shared

type ActiveDirectoryBackupAttributes struct {
	ActiveDirectoryID *string `json:"ActiveDirectoryId"`
	DomainName        *string `json:"DomainName"`
	ResourceArn       *string `json:"ResourceARN"`
}
