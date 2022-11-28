package shared

import (
	"time"
)

// BackendEnvironment
//
//	Describes the backend environment for an Amplify app.
type BackendEnvironment struct {
	BackendEnvironmentArn string    `json:"backendEnvironmentArn"`
	CreateTime            time.Time `json:"createTime"`
	DeploymentArtifacts   *string   `json:"deploymentArtifacts,omitempty"`
	EnvironmentName       string    `json:"environmentName"`
	StackName             *string   `json:"stackName,omitempty"`
	UpdateTime            time.Time `json:"updateTime"`
}
