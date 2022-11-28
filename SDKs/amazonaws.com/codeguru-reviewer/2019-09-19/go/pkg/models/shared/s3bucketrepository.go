package shared

// S3BucketRepository
//
//	Information about an associated repository in an S3 bucket. The associated repository contains a source code .zip file and a build artifacts .zip file that contains .jar or .class files.
type S3BucketRepository struct {
	Details *S3RepositoryDetails `json:"Details,omitempty"`
	Name    string               `json:"Name"`
}
