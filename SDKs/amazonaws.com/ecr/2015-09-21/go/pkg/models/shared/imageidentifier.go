package shared

type ImageIdentifier struct {
	ImageDigest *string `json:"imageDigest"`
	ImageTag    *string `json:"imageTag"`
}
