package shared

import (
	"time"
)

type APIDestination struct {
	APIDestinationArn            *string                       `json:"ApiDestinationArn"`
	APIDestinationState          *APIDestinationStateEnum      `json:"ApiDestinationState"`
	ConnectionArn                *string                       `json:"ConnectionArn"`
	CreationTime                 *time.Time                    `json:"CreationTime"`
	HTTPMethod                   *APIDestinationHTTPMethodEnum `json:"HttpMethod"`
	InvocationEndpoint           *string                       `json:"InvocationEndpoint"`
	InvocationRateLimitPerSecond *int64                        `json:"InvocationRateLimitPerSecond"`
	LastModifiedTime             *time.Time                    `json:"LastModifiedTime"`
	Name                         *string                       `json:"Name"`
}
