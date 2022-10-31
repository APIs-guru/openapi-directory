package shared

import (
	"time"
)

type CreateDevEndpointResponse struct {
	Arguments                          map[string]string `json:"Arguments,omitempty"`
	AvailabilityZone                   *string           `json:"AvailabilityZone,omitempty"`
	CreatedTimestamp                   *time.Time        `json:"CreatedTimestamp,omitempty"`
	EndpointName                       *string           `json:"EndpointName,omitempty"`
	ExtraJarsS3Path                    *string           `json:"ExtraJarsS3Path,omitempty"`
	ExtraPythonLibsS3Path              *string           `json:"ExtraPythonLibsS3Path,omitempty"`
	FailureReason                      *string           `json:"FailureReason,omitempty"`
	GlueVersion                        *string           `json:"GlueVersion,omitempty"`
	NumberOfNodes                      *int64            `json:"NumberOfNodes,omitempty"`
	NumberOfWorkers                    *int64            `json:"NumberOfWorkers,omitempty"`
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
