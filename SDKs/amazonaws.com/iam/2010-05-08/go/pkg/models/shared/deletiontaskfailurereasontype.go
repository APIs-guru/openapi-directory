package shared

// DeletionTaskFailureReasonType
// <p>The reason that the service-linked role deletion failed.</p> <p>This data type is used as a response element in the <a>GetServiceLinkedRoleDeletionStatus</a> operation.</p>
type DeletionTaskFailureReasonType struct {
	Reason        *string
	RoleUsageList []RoleUsageType
}
