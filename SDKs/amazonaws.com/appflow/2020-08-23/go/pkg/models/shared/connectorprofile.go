package shared

import (
"time")

type ConnectorProfile struct {
    ConnectionMode *ConnectionModeEnum `json:"connectionMode,omitempty"`
    ConnectorProfileArn *string `json:"connectorProfileArn,omitempty"`
    ConnectorProfileName *string `json:"connectorProfileName,omitempty"`
    ConnectorProfileProperties *ConnectorProfileProperties `json:"connectorProfileProperties,omitempty"`
    ConnectorType *ConnectorTypeEnum `json:"connectorType,omitempty"`
    CreatedAt *time.Time `json:"createdAt,omitempty"`
    CredentialsArn *string `json:"credentialsArn,omitempty"`
    LastUpdatedAt *time.Time `json:"lastUpdatedAt,omitempty"`
    PrivateConnectionProvisioningState *PrivateConnectionProvisioningState `json:"privateConnectionProvisioningState,omitempty"`
    
}

