package shared

// DeleteBranchOutput
// Represents the output of a delete branch operation.
type DeleteBranchOutput struct {
	DeletedBranch *BranchInfo `json:"deletedBranch,omitempty"`
}
