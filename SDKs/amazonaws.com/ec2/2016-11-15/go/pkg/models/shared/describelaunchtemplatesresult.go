package shared

type DescribeLaunchTemplatesResult struct {
	LaunchTemplates []LaunchTemplate
	NextToken       *string
}
