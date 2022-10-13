package shared

type CreateDatasetRequest struct {
	DataFrequency    *string           `json:"DataFrequency"`
	DatasetName      string            `json:"DatasetName"`
	DatasetType      DatasetTypeEnum   `json:"DatasetType"`
	Domain           DomainEnum        `json:"Domain"`
	EncryptionConfig *EncryptionConfig `json:"EncryptionConfig"`
	Schema           Schema            `json:"Schema"`
	Tags             []Tag             `json:"Tags"`
}
