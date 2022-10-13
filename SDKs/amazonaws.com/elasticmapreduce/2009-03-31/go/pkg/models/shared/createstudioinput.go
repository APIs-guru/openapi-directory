package shared

type CreateStudioInput struct {
	AuthMode                   AuthModeEnum `json:"AuthMode"`
	DefaultS3Location          string       `json:"DefaultS3Location"`
	Description                *string      `json:"Description"`
	EngineSecurityGroupID      string       `json:"EngineSecurityGroupId"`
	IdpAuthURL                 *string      `json:"IdpAuthUrl"`
	IdpRelayStateParameterName *string      `json:"IdpRelayStateParameterName"`
	Name                       string       `json:"Name"`
	ServiceRole                string       `json:"ServiceRole"`
	SubnetIds                  []string     `json:"SubnetIds"`
	Tags                       []Tag        `json:"Tags"`
	UserRole                   *string      `json:"UserRole"`
	VpcID                      string       `json:"VpcId"`
	WorkspaceSecurityGroupID   string       `json:"WorkspaceSecurityGroupId"`
}
