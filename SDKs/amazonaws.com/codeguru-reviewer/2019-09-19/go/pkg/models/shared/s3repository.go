package shared

// S3Repository
//
//	Information about a repository in an S3 bucket.
type S3Repository struct {
	BucketName string `json:"BucketName"`
	Name       string `json:"Name"`
}
