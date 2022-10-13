package shared

import (
	"time"
)

type Studio struct {
	AuthMode                   *AuthModeEnum `json:"AuthMode"`
	CreationTime               *time.Time    `json:"CreationTime"`
	DefaultS3Location          *string       `json:"DefaultS3Location"`
	Description                *string       `json:"Description"`
	EngineSecurityGroupID      *string       `json:"EngineSecurityGroupId"`
	IdpAuthURL                 *string       `json:"IdpAuthUrl"`
	IdpRelayStateParameterName *string       `json:"IdpRelayStateParameterName"`
	Name                       *string       `json:"Name"`
	ServiceRole                *string       `json:"ServiceRole"`
	StudioArn                  *string       `json:"StudioArn"`
	StudioID                   *string       `json:"StudioId"`
	SubnetIds                  []string      `json:"SubnetIds"`
	Tags                       []Tag         `json:"Tags"`
	URL                        *string       `json:"Url"`
	UserRole                   *string       `json:"UserRole"`
	VpcID                      *string       `json:"VpcId"`
	WorkspaceSecurityGroupID   *string       `json:"WorkspaceSecurityGroupId"`
}
