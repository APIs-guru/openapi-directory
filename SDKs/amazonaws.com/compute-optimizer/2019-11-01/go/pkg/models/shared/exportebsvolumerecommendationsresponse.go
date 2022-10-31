package shared

type ExportEbsVolumeRecommendationsResponse struct {
	JobID         *string        `json:"jobId,omitempty"`
	S3Destination *S3Destination `json:"s3Destination,omitempty"`
}
