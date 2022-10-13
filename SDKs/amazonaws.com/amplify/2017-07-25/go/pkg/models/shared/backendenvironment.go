package shared

import (
	"time"
)

type BackendEnvironment struct {
	BackendEnvironmentArn string    `json:"backendEnvironmentArn"`
	CreateTime            time.Time `json:"createTime"`
	DeploymentArtifacts   *string   `json:"deploymentArtifacts"`
	EnvironmentName       string    `json:"environmentName"`
	StackName             *string   `json:"stackName"`
	UpdateTime            time.Time `json:"updateTime"`
}
