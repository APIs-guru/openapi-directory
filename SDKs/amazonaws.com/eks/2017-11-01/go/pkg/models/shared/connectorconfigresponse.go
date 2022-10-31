package shared

import (
"time")

type ConnectorConfigResponse struct {
    ActivationCode *string `json:"activationCode,omitempty"`
    ActivationExpiry *time.Time `json:"activationExpiry,omitempty"`
    ActivationID *string `json:"activationId,omitempty"`
    Provider *string `json:"provider,omitempty"`
    RoleArn *string `json:"roleArn,omitempty"`
    
}

