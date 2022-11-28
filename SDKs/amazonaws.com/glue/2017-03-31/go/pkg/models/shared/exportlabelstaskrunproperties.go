package shared

// ExportLabelsTaskRunProperties
// Specifies configuration properties for an exporting labels task run.
type ExportLabelsTaskRunProperties struct {
	OutputS3Path *string `json:"OutputS3Path,omitempty"`
}
