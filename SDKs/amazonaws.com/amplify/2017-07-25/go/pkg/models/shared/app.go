package shared

import (
	"time"
)

type App struct {
	AppArn                     string                    `json:"appArn"`
	AppID                      string                    `json:"appId"`
	AutoBranchCreationConfig   *AutoBranchCreationConfig `json:"autoBranchCreationConfig,omitempty"`
	AutoBranchCreationPatterns []string                  `json:"autoBranchCreationPatterns,omitempty"`
	BasicAuthCredentials       *string                   `json:"basicAuthCredentials,omitempty"`
	BuildSpec                  *string                   `json:"buildSpec,omitempty"`
	CreateTime                 time.Time                 `json:"createTime"`
	CustomHeaders              *string                   `json:"customHeaders,omitempty"`
	CustomRules                []CustomRule              `json:"customRules,omitempty"`
	DefaultDomain              string                    `json:"defaultDomain"`
	Description                string                    `json:"description"`
	EnableAutoBranchCreation   *bool                     `json:"enableAutoBranchCreation,omitempty"`
	EnableBasicAuth            bool                      `json:"enableBasicAuth"`
	EnableBranchAutoBuild      bool                      `json:"enableBranchAutoBuild"`
	EnableBranchAutoDeletion   *bool                     `json:"enableBranchAutoDeletion,omitempty"`
	EnvironmentVariables       map[string]string         `json:"environmentVariables"`
	IamServiceRoleArn          *string                   `json:"iamServiceRoleArn,omitempty"`
	Name                       string                    `json:"name"`
	Platform                   PlatformEnum              `json:"platform"`
	ProductionBranch           *ProductionBranch         `json:"productionBranch,omitempty"`
	Repository                 string                    `json:"repository"`
	Tags                       map[string]string         `json:"tags,omitempty"`
	UpdateTime                 time.Time                 `json:"updateTime"`
}
