package shared

import (
	"time"
)

type DescribeLocationFsxWindowsResponse struct {
	CreationTime      *time.Time `json:"CreationTime"`
	Domain            *string    `json:"Domain"`
	LocationArn       *string    `json:"LocationArn"`
	LocationURI       *string    `json:"LocationUri"`
	SecurityGroupArns []string   `json:"SecurityGroupArns"`
	User              *string    `json:"User"`
}
