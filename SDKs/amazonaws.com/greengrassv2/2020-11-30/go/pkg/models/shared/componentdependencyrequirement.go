package shared

type ComponentDependencyRequirement struct {
	DependencyType     *ComponentDependencyTypeEnum `json:"dependencyType"`
	VersionRequirement *string                      `json:"versionRequirement"`
}
