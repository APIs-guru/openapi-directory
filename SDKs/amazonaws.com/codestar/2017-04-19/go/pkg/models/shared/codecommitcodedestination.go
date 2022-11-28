package shared

// CodeCommitCodeDestination
// Information about the AWS CodeCommit repository to be created in AWS CodeStar. This is where the source code files provided with the project request will be uploaded after project creation.
type CodeCommitCodeDestination struct {
	Name string `json:"name"`
}
