package shared

type Difference struct {
	AfterBlob  *BlobMetadata       `json:"afterBlob,omitempty"`
	BeforeBlob *BlobMetadata       `json:"beforeBlob,omitempty"`
	ChangeType *ChangeTypeEnumEnum `json:"changeType,omitempty"`
}
