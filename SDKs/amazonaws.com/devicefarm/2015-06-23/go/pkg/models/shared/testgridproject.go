package shared

import (
	"time"
)

// TestGridProject
// A Selenium testing project. Projects are used to collect and collate sessions.
type TestGridProject struct {
	Arn         *string            `json:"arn,omitempty"`
	Created     *time.Time         `json:"created,omitempty"`
	Description *string            `json:"description,omitempty"`
	Name        *string            `json:"name,omitempty"`
	VpcConfig   *TestGridVpcConfig `json:"vpcConfig,omitempty"`
}
