package shared



type CreateFleetInput struct {
    BuildID *string `json:"BuildId,omitempty"`
    CertificateConfiguration *CertificateConfiguration `json:"CertificateConfiguration,omitempty"`
    Description *string `json:"Description,omitempty"`
    Ec2InboundPermissions []IPPermission `json:"EC2InboundPermissions,omitempty"`
    Ec2InstanceType Ec2InstanceTypeEnum `json:"EC2InstanceType"`
    FleetType *FleetTypeEnum `json:"FleetType,omitempty"`
    InstanceRoleArn *string `json:"InstanceRoleArn,omitempty"`
    Locations []LocationConfiguration `json:"Locations,omitempty"`
    LogPaths []string `json:"LogPaths,omitempty"`
    MetricGroups []string `json:"MetricGroups,omitempty"`
    Name string `json:"Name"`
    NewGameSessionProtectionPolicy *ProtectionPolicyEnum `json:"NewGameSessionProtectionPolicy,omitempty"`
    PeerVpcAwsAccountID *string `json:"PeerVpcAwsAccountId,omitempty"`
    PeerVpcID *string `json:"PeerVpcId,omitempty"`
    ResourceCreationLimitPolicy *ResourceCreationLimitPolicy `json:"ResourceCreationLimitPolicy,omitempty"`
    RuntimeConfiguration *RuntimeConfiguration `json:"RuntimeConfiguration,omitempty"`
    ScriptID *string `json:"ScriptId,omitempty"`
    ServerLaunchParameters *string `json:"ServerLaunchParameters,omitempty"`
    ServerLaunchPath *string `json:"ServerLaunchPath,omitempty"`
    Tags []Tag `json:"Tags,omitempty"`
    
}

