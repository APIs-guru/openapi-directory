package shared

type S3BucketRepository struct {
	Details *S3RepositoryDetails `json:"Details"`
	Name    string               `json:"Name"`
}
