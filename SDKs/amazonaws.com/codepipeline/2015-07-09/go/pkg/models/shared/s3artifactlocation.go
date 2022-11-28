package shared

// S3ArtifactLocation
// The location of the S3 bucket that contains a revision.
type S3ArtifactLocation struct {
	BucketName string `json:"bucketName"`
	ObjectKey  string `json:"objectKey"`
}
