package shared

type S3ArtifactLocation struct {
	BucketName string `json:"bucketName"`
	ObjectKey  string `json:"objectKey"`
}
