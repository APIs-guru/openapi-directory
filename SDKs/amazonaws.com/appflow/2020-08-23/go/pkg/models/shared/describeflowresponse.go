package shared

import (
	"time"
)

type DescribeFlowResponse struct {
	CreatedAt                 *time.Time              `json:"createdAt,omitempty"`
	CreatedBy                 *string                 `json:"createdBy,omitempty"`
	Description               *string                 `json:"description,omitempty"`
	DestinationFlowConfigList []DestinationFlowConfig `json:"destinationFlowConfigList,omitempty"`
	FlowArn                   *string                 `json:"flowArn,omitempty"`
	FlowName                  *string                 `json:"flowName,omitempty"`
	FlowStatus                *FlowStatusEnum         `json:"flowStatus,omitempty"`
	FlowStatusMessage         *string                 `json:"flowStatusMessage,omitempty"`
	KmsArn                    *string                 `json:"kmsArn,omitempty"`
	LastRunExecutionDetails   *ExecutionDetails       `json:"lastRunExecutionDetails,omitempty"`
	LastUpdatedAt             *time.Time              `json:"lastUpdatedAt,omitempty"`
	LastUpdatedBy             *string                 `json:"lastUpdatedBy,omitempty"`
	SourceFlowConfig          *SourceFlowConfig       `json:"sourceFlowConfig,omitempty"`
	Tags                      map[string]string       `json:"tags,omitempty"`
	Tasks                     []Task                  `json:"tasks,omitempty"`
	TriggerConfig             *TriggerConfig          `json:"triggerConfig,omitempty"`
}
