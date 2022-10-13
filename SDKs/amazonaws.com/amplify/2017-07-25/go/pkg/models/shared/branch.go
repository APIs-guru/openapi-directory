package shared

import (
	"time"
)

type Branch struct {
	ActiveJobID                string            `json:"activeJobId"`
	AssociatedResources        []string          `json:"associatedResources"`
	BackendEnvironmentArn      *string           `json:"backendEnvironmentArn"`
	BasicAuthCredentials       *string           `json:"basicAuthCredentials"`
	BranchArn                  string            `json:"branchArn"`
	BranchName                 string            `json:"branchName"`
	BuildSpec                  *string           `json:"buildSpec"`
	CreateTime                 time.Time         `json:"createTime"`
	CustomDomains              []string          `json:"customDomains"`
	Description                string            `json:"description"`
	DestinationBranch          *string           `json:"destinationBranch"`
	DisplayName                string            `json:"displayName"`
	EnableAutoBuild            bool              `json:"enableAutoBuild"`
	EnableBasicAuth            bool              `json:"enableBasicAuth"`
	EnableNotification         bool              `json:"enableNotification"`
	EnablePerformanceMode      *bool             `json:"enablePerformanceMode"`
	EnablePullRequestPreview   bool              `json:"enablePullRequestPreview"`
	EnvironmentVariables       map[string]string `json:"environmentVariables"`
	Framework                  string            `json:"framework"`
	PullRequestEnvironmentName *string           `json:"pullRequestEnvironmentName"`
	SourceBranch               *string           `json:"sourceBranch"`
	Stage                      StageEnum         `json:"stage"`
	Tags                       map[string]string `json:"tags"`
	ThumbnailURL               *string           `json:"thumbnailUrl"`
	TotalNumberOfJobs          string            `json:"totalNumberOfJobs"`
	TTL                        string            `json:"ttl"`
	UpdateTime                 time.Time         `json:"updateTime"`
}
