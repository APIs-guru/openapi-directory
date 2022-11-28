package shared

import (
	"time"
)

// FleetAttributes
// <p>Describes a GameLift fleet of game hosting resources.</p> <p> <b>Related actions</b> </p> <p> <a>CreateFleet</a> | <a>DescribeFleetAttributes</a> </p>
type FleetAttributes struct {
	BuildArn                       *string                      `json:"BuildArn,omitempty"`
	BuildID                        *string                      `json:"BuildId,omitempty"`
	CertificateConfiguration       *CertificateConfiguration    `json:"CertificateConfiguration,omitempty"`
	CreationTime                   *time.Time                   `json:"CreationTime,omitempty"`
	Description                    *string                      `json:"Description,omitempty"`
	FleetArn                       *string                      `json:"FleetArn,omitempty"`
	FleetID                        *string                      `json:"FleetId,omitempty"`
	FleetType                      *FleetTypeEnum               `json:"FleetType,omitempty"`
	InstanceRoleArn                *string                      `json:"InstanceRoleArn,omitempty"`
	InstanceType                   *Ec2InstanceTypeEnum         `json:"InstanceType,omitempty"`
	LogPaths                       []string                     `json:"LogPaths,omitempty"`
	MetricGroups                   []string                     `json:"MetricGroups,omitempty"`
	Name                           *string                      `json:"Name,omitempty"`
	NewGameSessionProtectionPolicy *ProtectionPolicyEnum        `json:"NewGameSessionProtectionPolicy,omitempty"`
	OperatingSystem                *OperatingSystemEnum         `json:"OperatingSystem,omitempty"`
	ResourceCreationLimitPolicy    *ResourceCreationLimitPolicy `json:"ResourceCreationLimitPolicy,omitempty"`
	ScriptArn                      *string                      `json:"ScriptArn,omitempty"`
	ScriptID                       *string                      `json:"ScriptId,omitempty"`
	ServerLaunchParameters         *string                      `json:"ServerLaunchParameters,omitempty"`
	ServerLaunchPath               *string                      `json:"ServerLaunchPath,omitempty"`
	Status                         *FleetStatusEnum             `json:"Status,omitempty"`
	StoppedActions                 []FleetActionEnum            `json:"StoppedActions,omitempty"`
	TerminationTime                *time.Time                   `json:"TerminationTime,omitempty"`
}
