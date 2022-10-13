package shared

import (
	"time"
)

type DescribeAPIDestinationResponse struct {
	APIDestinationArn            *string                       `json:"ApiDestinationArn"`
	APIDestinationState          *APIDestinationStateEnum      `json:"ApiDestinationState"`
	ConnectionArn                *string                       `json:"ConnectionArn"`
	CreationTime                 *time.Time                    `json:"CreationTime"`
	Description                  *string                       `json:"Description"`
	HTTPMethod                   *APIDestinationHTTPMethodEnum `json:"HttpMethod"`
	InvocationEndpoint           *string                       `json:"InvocationEndpoint"`
	InvocationRateLimitPerSecond *int64                        `json:"InvocationRateLimitPerSecond"`
	LastModifiedTime             *time.Time                    `json:"LastModifiedTime"`
	Name                         *string                       `json:"Name"`
}
