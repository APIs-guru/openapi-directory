package shared

import (
	"time"
)

type FleetAttributes struct {
	BuildArn                       *string                      `json:"BuildArn"`
	BuildID                        *string                      `json:"BuildId"`
	CertificateConfiguration       *CertificateConfiguration    `json:"CertificateConfiguration"`
	CreationTime                   *time.Time                   `json:"CreationTime"`
	Description                    *string                      `json:"Description"`
	FleetArn                       *string                      `json:"FleetArn"`
	FleetID                        *string                      `json:"FleetId"`
	FleetType                      *FleetTypeEnum               `json:"FleetType"`
	InstanceRoleArn                *string                      `json:"InstanceRoleArn"`
	InstanceType                   *Ec2InstanceTypeEnum         `json:"InstanceType"`
	LogPaths                       []string                     `json:"LogPaths"`
	MetricGroups                   []string                     `json:"MetricGroups"`
	Name                           *string                      `json:"Name"`
	NewGameSessionProtectionPolicy *ProtectionPolicyEnum        `json:"NewGameSessionProtectionPolicy"`
	OperatingSystem                *OperatingSystemEnum         `json:"OperatingSystem"`
	ResourceCreationLimitPolicy    *ResourceCreationLimitPolicy `json:"ResourceCreationLimitPolicy"`
	ScriptArn                      *string                      `json:"ScriptArn"`
	ScriptID                       *string                      `json:"ScriptId"`
	ServerLaunchParameters         *string                      `json:"ServerLaunchParameters"`
	ServerLaunchPath               *string                      `json:"ServerLaunchPath"`
	Status                         *FleetStatusEnum             `json:"Status"`
	StoppedActions                 []FleetActionEnum            `json:"StoppedActions"`
	TerminationTime                *time.Time                   `json:"TerminationTime"`
}
