package shared

type CreateStudioInput struct {
	AuthMode                   AuthModeEnum `json:"AuthMode"`
	DefaultS3Location          string       `json:"DefaultS3Location"`
	Description                *string      `json:"Description,omitempty"`
	EngineSecurityGroupID      string       `json:"EngineSecurityGroupId"`
	IdpAuthURL                 *string      `json:"IdpAuthUrl,omitempty"`
	IdpRelayStateParameterName *string      `json:"IdpRelayStateParameterName,omitempty"`
	Name                       string       `json:"Name"`
	ServiceRole                string       `json:"ServiceRole"`
	SubnetIds                  []string     `json:"SubnetIds"`
	Tags                       []Tag        `json:"Tags,omitempty"`
	UserRole                   *string      `json:"UserRole,omitempty"`
	VpcID                      string       `json:"VpcId"`
	WorkspaceSecurityGroupID   string       `json:"WorkspaceSecurityGroupId"`
}
