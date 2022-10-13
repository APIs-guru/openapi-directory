package shared

import (
	"time"
)

type DescribeLocationEfsResponse struct {
	CreationTime *time.Time `json:"CreationTime"`
	Ec2Config    *Ec2Config `json:"Ec2Config"`
	LocationArn  *string    `json:"LocationArn"`
	LocationURI  *string    `json:"LocationUri"`
}
