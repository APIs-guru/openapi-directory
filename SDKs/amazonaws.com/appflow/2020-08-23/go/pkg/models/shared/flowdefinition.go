package shared

import (
	"time"
)

// FlowDefinition
//
//	The properties of the flow, such as its source, destination, trigger type, and so on.
type FlowDefinition struct {
	CreatedAt                *time.Time         `json:"createdAt,omitempty"`
	CreatedBy                *string            `json:"createdBy,omitempty"`
	Description              *string            `json:"description,omitempty"`
	DestinationConnectorType *ConnectorTypeEnum `json:"destinationConnectorType,omitempty"`
	FlowArn                  *string            `json:"flowArn,omitempty"`
	FlowName                 *string            `json:"flowName,omitempty"`
	FlowStatus               *FlowStatusEnum    `json:"flowStatus,omitempty"`
	LastRunExecutionDetails  *ExecutionDetails  `json:"lastRunExecutionDetails,omitempty"`
	LastUpdatedAt            *time.Time         `json:"lastUpdatedAt,omitempty"`
	LastUpdatedBy            *string            `json:"lastUpdatedBy,omitempty"`
	SourceConnectorType      *ConnectorTypeEnum `json:"sourceConnectorType,omitempty"`
	Tags                     map[string]string  `json:"tags,omitempty"`
	TriggerType              *TriggerTypeEnum   `json:"triggerType,omitempty"`
}
