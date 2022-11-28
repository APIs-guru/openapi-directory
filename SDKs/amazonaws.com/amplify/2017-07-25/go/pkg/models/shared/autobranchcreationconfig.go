package shared

// AutoBranchCreationConfig
//
//	Describes the automated branch creation configuration.
type AutoBranchCreationConfig struct {
	BasicAuthCredentials       *string           `json:"basicAuthCredentials,omitempty"`
	BuildSpec                  *string           `json:"buildSpec,omitempty"`
	EnableAutoBuild            *bool             `json:"enableAutoBuild,omitempty"`
	EnableBasicAuth            *bool             `json:"enableBasicAuth,omitempty"`
	EnablePerformanceMode      *bool             `json:"enablePerformanceMode,omitempty"`
	EnablePullRequestPreview   *bool             `json:"enablePullRequestPreview,omitempty"`
	EnvironmentVariables       map[string]string `json:"environmentVariables,omitempty"`
	Framework                  *string           `json:"framework,omitempty"`
	PullRequestEnvironmentName *string           `json:"pullRequestEnvironmentName,omitempty"`
	Stage                      *StageEnum        `json:"stage,omitempty"`
}
