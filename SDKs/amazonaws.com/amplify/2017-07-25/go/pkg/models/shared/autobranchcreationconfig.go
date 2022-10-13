package shared

type AutoBranchCreationConfig struct {
	BasicAuthCredentials       *string           `json:"basicAuthCredentials"`
	BuildSpec                  *string           `json:"buildSpec"`
	EnableAutoBuild            *bool             `json:"enableAutoBuild"`
	EnableBasicAuth            *bool             `json:"enableBasicAuth"`
	EnablePerformanceMode      *bool             `json:"enablePerformanceMode"`
	EnablePullRequestPreview   *bool             `json:"enablePullRequestPreview"`
	EnvironmentVariables       map[string]string `json:"environmentVariables"`
	Framework                  *string           `json:"framework"`
	PullRequestEnvironmentName *string           `json:"pullRequestEnvironmentName"`
	Stage                      *StageEnum        `json:"stage"`
}
