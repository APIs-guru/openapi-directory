package shared

// CodeSource
// The location where the source code files provided with the project request are stored. AWS CodeStar retrieves the files during project creation.
type CodeSource struct {
	S3 S3Location `json:"s3"`
}
