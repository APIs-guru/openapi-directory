package shared

// DeleteLaunchTemplateVersionsResponseErrorItem
// Describes a launch template version that could not be deleted.
type DeleteLaunchTemplateVersionsResponseErrorItem struct {
	LaunchTemplateID   *string
	LaunchTemplateName *string
	ResponseError      *ResponseError
	VersionNumber      *int64
}
