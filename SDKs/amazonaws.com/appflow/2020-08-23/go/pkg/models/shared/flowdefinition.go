package shared

import (
	"time"
)

type FlowDefinition struct {
	CreatedAt                *time.Time         `json:"createdAt"`
	CreatedBy                *string            `json:"createdBy"`
	Description              *string            `json:"description"`
	DestinationConnectorType *ConnectorTypeEnum `json:"destinationConnectorType"`
	FlowArn                  *string            `json:"flowArn"`
	FlowName                 *string            `json:"flowName"`
	FlowStatus               *FlowStatusEnum    `json:"flowStatus"`
	LastRunExecutionDetails  *ExecutionDetails  `json:"lastRunExecutionDetails"`
	LastUpdatedAt            *time.Time         `json:"lastUpdatedAt"`
	LastUpdatedBy            *string            `json:"lastUpdatedBy"`
	SourceConnectorType      *ConnectorTypeEnum `json:"sourceConnectorType"`
	Tags                     map[string]string  `json:"tags"`
	TriggerType              *TriggerTypeEnum   `json:"triggerType"`
}
