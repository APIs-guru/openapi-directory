package shared

// PlatformBranchSummary
// Summary information about a platform branch.
type PlatformBranchSummary struct {
	BranchName        *string
	BranchOrder       *int64
	LifecycleState    *string
	PlatformName      *string
	SupportedTierList []string
}
