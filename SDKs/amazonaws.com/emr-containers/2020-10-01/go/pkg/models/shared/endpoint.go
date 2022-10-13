package shared

import (
	"time"
)

type Endpoint struct {
	Arn                    *string                 `json:"arn"`
	CertificateArn         *string                 `json:"certificateArn"`
	ConfigurationOverrides *ConfigurationOverrides `json:"configurationOverrides"`
	CreatedAt              *time.Time              `json:"createdAt"`
	ExecutionRoleArn       *string                 `json:"executionRoleArn"`
	FailureReason          *FailureReasonEnum      `json:"failureReason"`
	ID                     *string                 `json:"id"`
	Name                   *string                 `json:"name"`
	ReleaseLabel           *string                 `json:"releaseLabel"`
	SecurityGroup          *string                 `json:"securityGroup"`
	ServerURL              *string                 `json:"serverUrl"`
	State                  *EndpointStateEnum      `json:"state"`
	StateDetails           *string                 `json:"stateDetails"`
	SubnetIds              []string                `json:"subnetIds"`
	Tags                   map[string]string       `json:"tags"`
	Type                   *string                 `json:"type"`
	VirtualClusterID       *string                 `json:"virtualClusterId"`
}
