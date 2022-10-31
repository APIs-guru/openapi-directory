package shared



type UploadListElement struct {
    ArchiveDescription *string `json:"ArchiveDescription,omitempty"`
    CreationDate *string `json:"CreationDate,omitempty"`
    MultipartUploadID *string `json:"MultipartUploadId,omitempty"`
    PartSizeInBytes *int64 `json:"PartSizeInBytes,omitempty"`
    VaultArn *string `json:"VaultARN,omitempty"`
    
}

