package shared

import (
	"time"
)

type Branch struct {
	ActiveJobID                string            `json:"activeJobId"`
	AssociatedResources        []string          `json:"associatedResources,omitempty"`
	BackendEnvironmentArn      *string           `json:"backendEnvironmentArn,omitempty"`
	BasicAuthCredentials       *string           `json:"basicAuthCredentials,omitempty"`
	BranchArn                  string            `json:"branchArn"`
	BranchName                 string            `json:"branchName"`
	BuildSpec                  *string           `json:"buildSpec,omitempty"`
	CreateTime                 time.Time         `json:"createTime"`
	CustomDomains              []string          `json:"customDomains"`
	Description                string            `json:"description"`
	DestinationBranch          *string           `json:"destinationBranch,omitempty"`
	DisplayName                string            `json:"displayName"`
	EnableAutoBuild            bool              `json:"enableAutoBuild"`
	EnableBasicAuth            bool              `json:"enableBasicAuth"`
	EnableNotification         bool              `json:"enableNotification"`
	EnablePerformanceMode      *bool             `json:"enablePerformanceMode,omitempty"`
	EnablePullRequestPreview   bool              `json:"enablePullRequestPreview"`
	EnvironmentVariables       map[string]string `json:"environmentVariables"`
	Framework                  string            `json:"framework"`
	PullRequestEnvironmentName *string           `json:"pullRequestEnvironmentName,omitempty"`
	SourceBranch               *string           `json:"sourceBranch,omitempty"`
	Stage                      StageEnum         `json:"stage"`
	Tags                       map[string]string `json:"tags,omitempty"`
	ThumbnailURL               *string           `json:"thumbnailUrl,omitempty"`
	TotalNumberOfJobs          string            `json:"totalNumberOfJobs"`
	TTL                        string            `json:"ttl"`
	UpdateTime                 time.Time         `json:"updateTime"`
}
