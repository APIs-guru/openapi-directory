package shared



type BackupDescription struct {
    BackupDetails *BackupDetails `json:"BackupDetails,omitempty"`
    SourceTableDetails *SourceTableDetails `json:"SourceTableDetails,omitempty"`
    SourceTableFeatureDetails *SourceTableFeatureDetails `json:"SourceTableFeatureDetails,omitempty"`
    
}

