package shared

// BackupDescription
// Contains the description of the backup created for the table.
type BackupDescription struct {
	BackupDetails             *BackupDetails             `json:"BackupDetails,omitempty"`
	SourceTableDetails        *SourceTableDetails        `json:"SourceTableDetails,omitempty"`
	SourceTableFeatureDetails *SourceTableFeatureDetails `json:"SourceTableFeatureDetails,omitempty"`
}
