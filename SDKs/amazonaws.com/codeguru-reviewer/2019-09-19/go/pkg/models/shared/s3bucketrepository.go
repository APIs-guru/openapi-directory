package shared

type S3BucketRepository struct {
	Details *S3RepositoryDetails `json:"Details,omitempty"`
	Name    string               `json:"Name"`
}
