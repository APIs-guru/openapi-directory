package shared

import (
	"time"
)

type DescribeEventSourceResponse struct {
	Arn            *string               `json:"Arn"`
	CreatedBy      *string               `json:"CreatedBy"`
	CreationTime   *time.Time            `json:"CreationTime"`
	ExpirationTime *time.Time            `json:"ExpirationTime"`
	Name           *string               `json:"Name"`
	State          *EventSourceStateEnum `json:"State"`
}
