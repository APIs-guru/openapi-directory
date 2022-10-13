package shared

import (
	"time"
)

type CreateAPIDestinationResponse struct {
	APIDestinationArn   *string                  `json:"ApiDestinationArn"`
	APIDestinationState *APIDestinationStateEnum `json:"ApiDestinationState"`
	CreationTime        *time.Time               `json:"CreationTime"`
	LastModifiedTime    *time.Time               `json:"LastModifiedTime"`
}
