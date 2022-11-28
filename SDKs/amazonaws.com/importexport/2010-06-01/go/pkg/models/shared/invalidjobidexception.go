package shared

// InvalidJobIDException
// The JOBID was missing, not found, or not associated with the AWS account.
type InvalidJobIDException struct {
	Message *string
}
