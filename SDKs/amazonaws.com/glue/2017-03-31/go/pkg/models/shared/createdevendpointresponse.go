package shared

import (
	"time"
)

type CreateDevEndpointResponse struct {
	Arguments                          map[string]string `json:"Arguments"`
	AvailabilityZone                   *string           `json:"AvailabilityZone"`
	CreatedTimestamp                   *time.Time        `json:"CreatedTimestamp"`
	EndpointName                       *string           `json:"EndpointName"`
	ExtraJarsS3Path                    *string           `json:"ExtraJarsS3Path"`
	ExtraPythonLibsS3Path              *string           `json:"ExtraPythonLibsS3Path"`
	FailureReason                      *string           `json:"FailureReason"`
	GlueVersion                        *string           `json:"GlueVersion"`
	NumberOfNodes                      *int64            `json:"NumberOfNodes"`
	NumberOfWorkers                    *int64            `json:"NumberOfWorkers"`
	RoleArn                            *string           `json:"RoleArn"`
	SecurityConfiguration              *string           `json:"SecurityConfiguration"`
	SecurityGroupIds                   []string          `json:"SecurityGroupIds"`
	Status                             *string           `json:"Status"`
	SubnetID                           *string           `json:"SubnetId"`
	VpcID                              *string           `json:"VpcId"`
	WorkerType                         *WorkerTypeEnum   `json:"WorkerType"`
	YarnEndpointAddress                *string           `json:"YarnEndpointAddress"`
	ZeppelinRemoteSparkInterpreterPort *int64            `json:"ZeppelinRemoteSparkInterpreterPort"`
}
