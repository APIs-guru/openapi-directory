package shared

import (
	"time"
)

type DescribeLocationEfsResponse struct {
	CreationTime *time.Time `json:"CreationTime,omitempty"`
	Ec2Config    *Ec2Config `json:"Ec2Config,omitempty"`
	LocationArn  *string    `json:"LocationArn,omitempty"`
	LocationURI  *string    `json:"LocationUri,omitempty"`
}
