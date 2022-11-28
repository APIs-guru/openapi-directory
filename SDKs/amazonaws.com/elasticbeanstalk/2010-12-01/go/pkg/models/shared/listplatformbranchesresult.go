package shared

type ListPlatformBranchesResult struct {
	NextToken                 *string
	PlatformBranchSummaryList []PlatformBranchSummary
}
