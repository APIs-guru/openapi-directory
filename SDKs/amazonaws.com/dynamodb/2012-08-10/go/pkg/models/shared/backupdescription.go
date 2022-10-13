package shared

type BackupDescription struct {
	BackupDetails             *BackupDetails             `json:"BackupDetails"`
	SourceTableDetails        *SourceTableDetails        `json:"SourceTableDetails"`
	SourceTableFeatureDetails *SourceTableFeatureDetails `json:"SourceTableFeatureDetails"`
}
