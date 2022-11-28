package shared

// UploadListElement
// A list of in-progress multipart uploads for a vault.
type UploadListElement struct {
	ArchiveDescription *string `json:"ArchiveDescription,omitempty"`
	CreationDate       *string `json:"CreationDate,omitempty"`
	MultipartUploadID  *string `json:"MultipartUploadId,omitempty"`
	PartSizeInBytes    *int64  `json:"PartSizeInBytes,omitempty"`
	VaultArn           *string `json:"VaultARN,omitempty"`
}
