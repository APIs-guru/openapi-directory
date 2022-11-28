package shared

// TagDescription
// Describes a tag for an Auto Scaling group.
type TagDescription struct {
	Key               *string
	PropagateAtLaunch *bool
	ResourceID        *string
	ResourceType      *string
	Value             *string
}
