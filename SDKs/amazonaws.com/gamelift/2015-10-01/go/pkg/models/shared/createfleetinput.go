package shared

type CreateFleetInput struct {
	BuildID                        *string                      `json:"BuildId"`
	CertificateConfiguration       *CertificateConfiguration    `json:"CertificateConfiguration"`
	Description                    *string                      `json:"Description"`
	Ec2InboundPermissions          []IPPermission               `json:"EC2InboundPermissions"`
	Ec2InstanceType                Ec2InstanceTypeEnum          `json:"EC2InstanceType"`
	FleetType                      *FleetTypeEnum               `json:"FleetType"`
	InstanceRoleArn                *string                      `json:"InstanceRoleArn"`
	Locations                      []LocationConfiguration      `json:"Locations"`
	LogPaths                       []string                     `json:"LogPaths"`
	MetricGroups                   []string                     `json:"MetricGroups"`
	Name                           string                       `json:"Name"`
	NewGameSessionProtectionPolicy *ProtectionPolicyEnum        `json:"NewGameSessionProtectionPolicy"`
	PeerVpcAwsAccountID            *string                      `json:"PeerVpcAwsAccountId"`
	PeerVpcID                      *string                      `json:"PeerVpcId"`
	ResourceCreationLimitPolicy    *ResourceCreationLimitPolicy `json:"ResourceCreationLimitPolicy"`
	RuntimeConfiguration           *RuntimeConfiguration        `json:"RuntimeConfiguration"`
	ScriptID                       *string                      `json:"ScriptId"`
	ServerLaunchParameters         *string                      `json:"ServerLaunchParameters"`
	ServerLaunchPath               *string                      `json:"ServerLaunchPath"`
	Tags                           []Tag                        `json:"Tags"`
}
