package shared

// DescribeEnvironmentManagedActionHistoryResult
// A result message containing a list of completed and failed managed actions.
type DescribeEnvironmentManagedActionHistoryResult struct {
	ManagedActionHistoryItems []ManagedActionHistoryItem
	NextToken                 *string
}
