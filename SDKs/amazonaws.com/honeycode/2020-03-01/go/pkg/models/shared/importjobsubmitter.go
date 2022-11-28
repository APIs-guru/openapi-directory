package shared

// ImportJobSubmitter
// An object that contains the attributes of the submitter of the import job.
type ImportJobSubmitter struct {
	Email   *string `json:"email,omitempty"`
	UserArn *string `json:"userArn,omitempty"`
}
