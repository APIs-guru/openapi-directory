package shared

import (
	"time"
)

type DevEndpoint struct {
	Arguments                          map[string]string `json:"Arguments"`
	AvailabilityZone                   *string           `json:"AvailabilityZone"`
	CreatedTimestamp                   *time.Time        `json:"CreatedTimestamp"`
	EndpointName                       *string           `json:"EndpointName"`
	ExtraJarsS3Path                    *string           `json:"ExtraJarsS3Path"`
	ExtraPythonLibsS3Path              *string           `json:"ExtraPythonLibsS3Path"`
	FailureReason                      *string           `json:"FailureReason"`
	GlueVersion                        *string           `json:"GlueVersion"`
	LastModifiedTimestamp              *time.Time        `json:"LastModifiedTimestamp"`
	LastUpdateStatus                   *string           `json:"LastUpdateStatus"`
	NumberOfNodes                      *int64            `json:"NumberOfNodes"`
	NumberOfWorkers                    *int64            `json:"NumberOfWorkers"`
	PrivateAddress                     *string           `json:"PrivateAddress"`
	PublicAddress                      *string           `json:"PublicAddress"`
	PublicKey                          *string           `json:"PublicKey"`
	PublicKeys                         []string          `json:"PublicKeys"`
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
