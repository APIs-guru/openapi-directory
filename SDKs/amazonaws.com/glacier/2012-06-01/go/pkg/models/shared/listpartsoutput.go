package shared

// ListPartsOutput
// Contains the Amazon S3 Glacier response to your request.
type ListPartsOutput struct {
	ArchiveDescription *string           `json:"ArchiveDescription,omitempty"`
	CreationDate       *string           `json:"CreationDate,omitempty"`
	Marker             *string           `json:"Marker,omitempty"`
	MultipartUploadID  *string           `json:"MultipartUploadId,omitempty"`
	PartSizeInBytes    *int64            `json:"PartSizeInBytes,omitempty"`
	Parts              []PartListElement `json:"Parts,omitempty"`
	VaultArn           *string           `json:"VaultARN,omitempty"`
}
