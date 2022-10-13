package shared

import (
	"time"
)

type App struct {
	AppArn                     string                    `json:"appArn"`
	AppID                      string                    `json:"appId"`
	AutoBranchCreationConfig   *AutoBranchCreationConfig `json:"autoBranchCreationConfig"`
	AutoBranchCreationPatterns []string                  `json:"autoBranchCreationPatterns"`
	BasicAuthCredentials       *string                   `json:"basicAuthCredentials"`
	BuildSpec                  *string                   `json:"buildSpec"`
	CreateTime                 time.Time                 `json:"createTime"`
	CustomHeaders              *string                   `json:"customHeaders"`
	CustomRules                []CustomRule              `json:"customRules"`
	DefaultDomain              string                    `json:"defaultDomain"`
	Description                string                    `json:"description"`
	EnableAutoBranchCreation   *bool                     `json:"enableAutoBranchCreation"`
	EnableBasicAuth            bool                      `json:"enableBasicAuth"`
	EnableBranchAutoBuild      bool                      `json:"enableBranchAutoBuild"`
	EnableBranchAutoDeletion   *bool                     `json:"enableBranchAutoDeletion"`
	EnvironmentVariables       map[string]string         `json:"environmentVariables"`
	IamServiceRoleArn          *string                   `json:"iamServiceRoleArn"`
	Name                       string                    `json:"name"`
	Platform                   PlatformEnum              `json:"platform"`
	ProductionBranch           *ProductionBranch         `json:"productionBranch"`
	Repository                 string                    `json:"repository"`
	Tags                       map[string]string         `json:"tags"`
	UpdateTime                 time.Time                 `json:"updateTime"`
}
