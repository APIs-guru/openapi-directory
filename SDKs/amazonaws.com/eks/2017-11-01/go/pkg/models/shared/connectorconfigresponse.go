package shared

import (
	"time"
)

type ConnectorConfigResponse struct {
	ActivationCode   *string    `json:"activationCode"`
	ActivationExpiry *time.Time `json:"activationExpiry"`
	ActivationID     *string    `json:"activationId"`
	Provider         *string    `json:"provider"`
	RoleArn          *string    `json:"roleArn"`
}
