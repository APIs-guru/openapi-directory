package shared

type ListPartsOutput struct {
	ArchiveDescription *string           `json:"ArchiveDescription"`
	CreationDate       *string           `json:"CreationDate"`
	Marker             *string           `json:"Marker"`
	MultipartUploadID  *string           `json:"MultipartUploadId"`
	PartSizeInBytes    *int64            `json:"PartSizeInBytes"`
	Parts              []PartListElement `json:"Parts"`
	VaultArn           *string           `json:"VaultARN"`
}
