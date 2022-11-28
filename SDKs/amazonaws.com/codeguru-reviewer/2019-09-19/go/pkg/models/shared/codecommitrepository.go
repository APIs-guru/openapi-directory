package shared

// CodeCommitRepository
// Information about an Amazon Web Services CodeCommit repository. The CodeCommit repository must be in the same Amazon Web Services Region and Amazon Web Services account where its CodeGuru Reviewer code reviews are configured.
type CodeCommitRepository struct {
	Name string `json:"Name"`
}
