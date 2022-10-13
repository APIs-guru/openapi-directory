package shared

import (
	"time"
)

type InstanceInfo struct {
	DeregisterTime *time.Time `json:"deregisterTime"`
	IamSessionArn  *string    `json:"iamSessionArn"`
	IamUserArn     *string    `json:"iamUserArn"`
	InstanceArn    *string    `json:"instanceArn"`
	InstanceName   *string    `json:"instanceName"`
	RegisterTime   *time.Time `json:"registerTime"`
	Tags           []Tag      `json:"tags"`
}
