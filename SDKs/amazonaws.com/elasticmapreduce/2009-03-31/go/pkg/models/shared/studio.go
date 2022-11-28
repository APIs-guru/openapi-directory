package shared

import (
	"time"
)

// Studio
// Details for an Amazon EMR Studio including ID, creation time, name, and so on.
type Studio struct {
	AuthMode                   *AuthModeEnum `json:"AuthMode,omitempty"`
	CreationTime               *time.Time    `json:"CreationTime,omitempty"`
	DefaultS3Location          *string       `json:"DefaultS3Location,omitempty"`
	Description                *string       `json:"Description,omitempty"`
	EngineSecurityGroupID      *string       `json:"EngineSecurityGroupId,omitempty"`
	IdpAuthURL                 *string       `json:"IdpAuthUrl,omitempty"`
	IdpRelayStateParameterName *string       `json:"IdpRelayStateParameterName,omitempty"`
	Name                       *string       `json:"Name,omitempty"`
	ServiceRole                *string       `json:"ServiceRole,omitempty"`
	StudioArn                  *string       `json:"StudioArn,omitempty"`
	StudioID                   *string       `json:"StudioId,omitempty"`
	SubnetIds                  []string      `json:"SubnetIds,omitempty"`
	Tags                       []Tag         `json:"Tags,omitempty"`
	URL                        *string       `json:"Url,omitempty"`
	UserRole                   *string       `json:"UserRole,omitempty"`
	VpcID                      *string       `json:"VpcId,omitempty"`
	WorkspaceSecurityGroupID   *string       `json:"WorkspaceSecurityGroupId,omitempty"`
}
