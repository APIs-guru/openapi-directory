package shared

import (
	"time"
)

// ResourceGroup
// Contains information about a resource group. The resource group defines a set of tags that, when queried, identify the AWS resources that make up the assessment target. This data type is used as the response element in the <a>DescribeResourceGroups</a> action.
type ResourceGroup struct {
	Arn       string             `json:"arn"`
	CreatedAt time.Time          `json:"createdAt"`
	Tags      []ResourceGroupTag `json:"tags"`
}
