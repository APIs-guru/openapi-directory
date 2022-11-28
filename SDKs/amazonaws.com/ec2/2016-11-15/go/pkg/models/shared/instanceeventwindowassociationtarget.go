package shared

// InstanceEventWindowAssociationTarget
// One or more targets associated with the event window.
type InstanceEventWindowAssociationTarget struct {
	DedicatedHostIds []string
	InstanceIds      []string
	Tags             []Tag
}
