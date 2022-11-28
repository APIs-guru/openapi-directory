package shared

// ComponentDependencyRequirement
// Contains information about a component dependency for a Lambda function component.
type ComponentDependencyRequirement struct {
	DependencyType     *ComponentDependencyTypeEnum `json:"dependencyType,omitempty"`
	VersionRequirement *string                      `json:"versionRequirement,omitempty"`
}
