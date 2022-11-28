package shared

// PermissionsBoundaryDecisionDetail
// Contains information about the effect that a permissions boundary has on a policy simulation when the boundary is applied to an IAM entity.
type PermissionsBoundaryDecisionDetail struct {
	AllowedByPermissionsBoundary *bool
}
