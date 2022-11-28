package shared

import (
	"time"
)

// Endpoint
// This entity represents the endpoint that is managed by Amazon EMR on EKS.
type Endpoint struct {
	Arn                    *string                 `json:"arn,omitempty"`
	CertificateArn         *string                 `json:"certificateArn,omitempty"`
	ConfigurationOverrides *ConfigurationOverrides `json:"configurationOverrides,omitempty"`
	CreatedAt              *time.Time              `json:"createdAt,omitempty"`
	ExecutionRoleArn       *string                 `json:"executionRoleArn,omitempty"`
	FailureReason          *FailureReasonEnum      `json:"failureReason,omitempty"`
	ID                     *string                 `json:"id,omitempty"`
	Name                   *string                 `json:"name,omitempty"`
	ReleaseLabel           *string                 `json:"releaseLabel,omitempty"`
	SecurityGroup          *string                 `json:"securityGroup,omitempty"`
	ServerURL              *string                 `json:"serverUrl,omitempty"`
	State                  *EndpointStateEnum      `json:"state,omitempty"`
	StateDetails           *string                 `json:"stateDetails,omitempty"`
	SubnetIds              []string                `json:"subnetIds,omitempty"`
	Tags                   map[string]string       `json:"tags,omitempty"`
	Type                   *string                 `json:"type,omitempty"`
	VirtualClusterID       *string                 `json:"virtualClusterId,omitempty"`
}
