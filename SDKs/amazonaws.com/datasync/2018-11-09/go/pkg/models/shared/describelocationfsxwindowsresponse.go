package shared

import (
	"time"
)

type DescribeLocationFsxWindowsResponse struct {
	CreationTime      *time.Time `json:"CreationTime,omitempty"`
	Domain            *string    `json:"Domain,omitempty"`
	LocationArn       *string    `json:"LocationArn,omitempty"`
	LocationURI       *string    `json:"LocationUri,omitempty"`
	SecurityGroupArns []string   `json:"SecurityGroupArns,omitempty"`
	User              *string    `json:"User,omitempty"`
}
