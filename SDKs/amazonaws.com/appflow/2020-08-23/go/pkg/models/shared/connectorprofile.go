package shared

import (
	"time"
)

// ConnectorProfile
//
//	Describes an instance of a connector. This includes the provided name, credentials ARN, connection-mode, and so on. To keep the API intuitive and extensible, the fields that are common to all types of connector profiles are explicitly specified at the top level. The rest of the connector-specific properties are available via the <code>connectorProfileProperties</code> field.
type ConnectorProfile struct {
	ConnectionMode                     *ConnectionModeEnum                 `json:"connectionMode,omitempty"`
	ConnectorProfileArn                *string                             `json:"connectorProfileArn,omitempty"`
	ConnectorProfileName               *string                             `json:"connectorProfileName,omitempty"`
	ConnectorProfileProperties         *ConnectorProfileProperties         `json:"connectorProfileProperties,omitempty"`
	ConnectorType                      *ConnectorTypeEnum                  `json:"connectorType,omitempty"`
	CreatedAt                          *time.Time                          `json:"createdAt,omitempty"`
	CredentialsArn                     *string                             `json:"credentialsArn,omitempty"`
	LastUpdatedAt                      *time.Time                          `json:"lastUpdatedAt,omitempty"`
	PrivateConnectionProvisioningState *PrivateConnectionProvisioningState `json:"privateConnectionProvisioningState,omitempty"`
}
