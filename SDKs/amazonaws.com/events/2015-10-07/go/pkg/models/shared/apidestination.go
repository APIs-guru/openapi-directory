package shared

import (
	"time"
)

// APIDestination
// Contains details about an API destination.
type APIDestination struct {
	APIDestinationArn            *string                       `json:"ApiDestinationArn,omitempty"`
	APIDestinationState          *APIDestinationStateEnum      `json:"ApiDestinationState,omitempty"`
	ConnectionArn                *string                       `json:"ConnectionArn,omitempty"`
	CreationTime                 *time.Time                    `json:"CreationTime,omitempty"`
	HTTPMethod                   *APIDestinationHTTPMethodEnum `json:"HttpMethod,omitempty"`
	InvocationEndpoint           *string                       `json:"InvocationEndpoint,omitempty"`
	InvocationRateLimitPerSecond *int64                        `json:"InvocationRateLimitPerSecond,omitempty"`
	LastModifiedTime             *time.Time                    `json:"LastModifiedTime,omitempty"`
	Name                         *string                       `json:"Name,omitempty"`
}
