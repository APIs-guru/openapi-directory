package shared



type ComponentDependencyRequirement struct {
    DependencyType *ComponentDependencyTypeEnum `json:"dependencyType,omitempty"`
    VersionRequirement *string `json:"versionRequirement,omitempty"`
    
}

