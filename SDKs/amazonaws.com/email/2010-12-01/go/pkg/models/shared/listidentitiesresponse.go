package shared

// ListIdentitiesResponse
// A list of all identities that you have attempted to verify under your AWS account, regardless of verification status.
type ListIdentitiesResponse struct {
	Identities []string
	NextToken  *string
}
