package shared

// CreatedArtifact
// An ARN of the AWS cloud resource target receiving the migration (e.g., AMI, EC2 instance, RDS instance, etc.).
type CreatedArtifact struct {
	Description *string `json:"Description,omitempty"`
	Name        string  `json:"Name"`
}
