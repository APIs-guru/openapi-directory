package shared

// GitSubmodulesConfig
//
//	Information about the Git submodules configuration for an CodeBuild build project.
type GitSubmodulesConfig struct {
	FetchSubmodules bool `json:"fetchSubmodules"`
}
