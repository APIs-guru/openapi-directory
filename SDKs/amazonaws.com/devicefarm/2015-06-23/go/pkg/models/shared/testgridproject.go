package shared

import (
	"time"
)

type TestGridProject struct {
	Arn         *string            `json:"arn"`
	Created     *time.Time         `json:"created"`
	Description *string            `json:"description"`
	Name        *string            `json:"name"`
	VpcConfig   *TestGridVpcConfig `json:"vpcConfig"`
}
