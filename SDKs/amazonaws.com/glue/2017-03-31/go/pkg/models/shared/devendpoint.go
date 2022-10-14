package shared

import (
	"time"
)

type DevEndpoint struct {
	Arguments                          map[string]string `json:"Arguments,omitempty"`
	AvailabilityZone                   *string           `json:"AvailabilityZone,omitempty"`
	CreatedTimestamp                   *time.Time        `json:"CreatedTimestamp,omitempty"`
	EndpointName                       *string           `json:"EndpointName,omitempty"`
	ExtraJarsS3Path                    *string           `json:"ExtraJarsS3Path,omitempty"`
	ExtraPythonLibsS3Path              *string           `json:"ExtraPythonLibsS3Path,omitempty"`
	FailureReason                      *string           `json:"FailureReason,omitempty"`
	GlueVersion                        *string           `json:"GlueVersion,omitempty"`
	LastModifiedTimestamp              *time.Time        `json:"LastModifiedTimestamp,omitempty"`
	LastUpdateStatus                   *string           `json:"LastUpdateStatus,omitempty"`
	NumberOfNodes                      *int64            `json:"NumberOfNodes,omitempty"`
	NumberOfWorkers                    *int64            `json:"NumberOfWorkers,omitempty"`
	PrivateAddress                     *string           `json:"PrivateAddress,omitempty"`
	PublicAddress                      *string           `json:"PublicAddress,omitempty"`
	PublicKey                          *string           `json:"PublicKey,omitempty"`
	PublicKeys                         []string          `json:"PublicKeys,omitempty"`
	RoleArn                            *string           `json:"RoleArn,omitempty"`
	SecurityConfiguration              *string           `json:"SecurityConfiguration,omitempty"`
	SecurityGroupIds                   []string          `json:"SecurityGroupIds,omitempty"`
	Status                             *string           `json:"Status,omitempty"`
	SubnetID                           *string           `json:"SubnetId,omitempty"`
	VpcID                              *string           `json:"VpcId,omitempty"`
	WorkerType                         *WorkerTypeEnum   `json:"WorkerType,omitempty"`
	YarnEndpointAddress                *string           `json:"YarnEndpointAddress,omitempty"`
	ZeppelinRemoteSparkInterpreterPort *int64            `json:"ZeppelinRemoteSparkInterpreterPort,omitempty"`
}
