package shared

import (
	"time"
)

type ConnectorProfile struct {
	ConnectionMode                     *ConnectionModeEnum                 `json:"connectionMode"`
	ConnectorProfileArn                *string                             `json:"connectorProfileArn"`
	ConnectorProfileName               *string                             `json:"connectorProfileName"`
	ConnectorProfileProperties         *ConnectorProfileProperties         `json:"connectorProfileProperties"`
	ConnectorType                      *ConnectorTypeEnum                  `json:"connectorType"`
	CreatedAt                          *time.Time                          `json:"createdAt"`
	CredentialsArn                     *string                             `json:"credentialsArn"`
	LastUpdatedAt                      *time.Time                          `json:"lastUpdatedAt"`
	PrivateConnectionProvisioningState *PrivateConnectionProvisioningState `json:"privateConnectionProvisioningState"`
}
