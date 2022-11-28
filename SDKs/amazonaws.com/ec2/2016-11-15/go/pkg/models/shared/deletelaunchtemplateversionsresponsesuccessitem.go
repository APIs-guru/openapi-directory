package shared

// DeleteLaunchTemplateVersionsResponseSuccessItem
// Describes a launch template version that was successfully deleted.
type DeleteLaunchTemplateVersionsResponseSuccessItem struct {
	LaunchTemplateID   *string
	LaunchTemplateName *string
	VersionNumber      *int64
}
