package shared

// ToolchainSource
// The Amazon S3 location where the toolchain template file provided with the project request is stored. AWS CodeStar retrieves the file during project creation.
type ToolchainSource struct {
	S3 S3Location `json:"s3"`
}
