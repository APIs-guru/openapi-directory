package shared

type Difference struct {
	AfterBlob  *BlobMetadata       `json:"afterBlob"`
	BeforeBlob *BlobMetadata       `json:"beforeBlob"`
	ChangeType *ChangeTypeEnumEnum `json:"changeType"`
}
