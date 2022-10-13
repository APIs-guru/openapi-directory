package shared

type UploadListElement struct {
	ArchiveDescription *string `json:"ArchiveDescription"`
	CreationDate       *string `json:"CreationDate"`
	MultipartUploadID  *string `json:"MultipartUploadId"`
	PartSizeInBytes    *int64  `json:"PartSizeInBytes"`
	VaultArn           *string `json:"VaultARN"`
}
