package shared

import (
	"time"
)

type DescribeAgentResponse struct {
	AgentArn           *string            `json:"AgentArn"`
	CreationTime       *time.Time         `json:"CreationTime"`
	EndpointType       *EndpointTypeEnum  `json:"EndpointType"`
	LastConnectionTime *time.Time         `json:"LastConnectionTime"`
	Name               *string            `json:"Name"`
	PrivateLinkConfig  *PrivateLinkConfig `json:"PrivateLinkConfig"`
	Status             *AgentStatusEnum   `json:"Status"`
}
