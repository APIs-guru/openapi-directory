package shared

type ExportEbsVolumeRecommendationsResponse struct {
	JobID         *string        `json:"jobId"`
	S3Destination *S3Destination `json:"s3Destination"`
}
