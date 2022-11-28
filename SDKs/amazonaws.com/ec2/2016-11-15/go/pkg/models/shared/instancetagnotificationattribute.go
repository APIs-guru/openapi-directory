package shared

// InstanceTagNotificationAttribute
// Describes the registered tag keys for the current Region.
type InstanceTagNotificationAttribute struct {
	IncludeAllTagsOfInstance *bool
	InstanceTagKeys          []string
}
