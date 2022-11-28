package shared

type DescribeLaunchTemplateVersionsResult struct {
	LaunchTemplateVersions []LaunchTemplateVersion
	NextToken              *string
}
