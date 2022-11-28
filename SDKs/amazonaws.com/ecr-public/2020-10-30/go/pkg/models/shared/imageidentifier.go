package shared

// ImageIdentifier
// An object with identifying information for an Amazon ECR image.
type ImageIdentifier struct {
	ImageDigest *string `json:"imageDigest,omitempty"`
	ImageTag    *string `json:"imageTag,omitempty"`
}
