package shared

// S3Destination
// Describes the destination Amazon Simple Storage Service (Amazon S3) bucket name and object keys of a recommendations export file, and its associated metadata file.
type S3Destination struct {
	Bucket      *string `json:"bucket,omitempty"`
	Key         *string `json:"key,omitempty"`
	MetadataKey *string `json:"metadataKey,omitempty"`
}
