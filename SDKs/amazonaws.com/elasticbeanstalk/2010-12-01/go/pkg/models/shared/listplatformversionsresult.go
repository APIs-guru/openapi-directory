package shared

type ListPlatformVersionsResult struct {
	NextToken           *string
	PlatformSummaryList []PlatformSummary
}
