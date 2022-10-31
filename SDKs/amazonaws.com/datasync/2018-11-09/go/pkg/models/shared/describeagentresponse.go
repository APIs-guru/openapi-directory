package shared

import (
"time")

type DescribeAgentResponse struct {
    AgentArn *string `json:"AgentArn,omitempty"`
    CreationTime *time.Time `json:"CreationTime,omitempty"`
    EndpointType *EndpointTypeEnum `json:"EndpointType,omitempty"`
    LastConnectionTime *time.Time `json:"LastConnectionTime,omitempty"`
    Name *string `json:"Name,omitempty"`
    PrivateLinkConfig *PrivateLinkConfig `json:"PrivateLinkConfig,omitempty"`
    Status *AgentStatusEnum `json:"Status,omitempty"`
    
}

