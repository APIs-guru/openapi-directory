package shared

// S3RepositoryDetails
//
//	Specifies the name of an S3 bucket and a <code>CodeArtifacts</code> object that contains the S3 object keys for a source code .zip file and for a build artifacts .zip file that contains .jar or .class files.
type S3RepositoryDetails struct {
	BucketName    *string        `json:"BucketName,omitempty"`
	CodeArtifacts *CodeArtifacts `json:"CodeArtifacts,omitempty"`
}
