package shared

type ExportLambdaFunctionRecommendationsResponse struct {
	JobID         *string        `json:"jobId"`
	S3Destination *S3Destination `json:"s3Destination"`
}
