package shared

import (
	"time"
)

type DescribeFlowResponse struct {
	CreatedAt                 *time.Time              `json:"createdAt"`
	CreatedBy                 *string                 `json:"createdBy"`
	Description               *string                 `json:"description"`
	DestinationFlowConfigList []DestinationFlowConfig `json:"destinationFlowConfigList"`
	FlowArn                   *string                 `json:"flowArn"`
	FlowName                  *string                 `json:"flowName"`
	FlowStatus                *FlowStatusEnum         `json:"flowStatus"`
	FlowStatusMessage         *string                 `json:"flowStatusMessage"`
	KmsArn                    *string                 `json:"kmsArn"`
	LastRunExecutionDetails   *ExecutionDetails       `json:"lastRunExecutionDetails"`
	LastUpdatedAt             *time.Time              `json:"lastUpdatedAt"`
	LastUpdatedBy             *string                 `json:"lastUpdatedBy"`
	SourceFlowConfig          *SourceFlowConfig       `json:"sourceFlowConfig"`
	Tags                      map[string]string       `json:"tags"`
	Tasks                     []Task                  `json:"tasks"`
	TriggerConfig             *TriggerConfig          `json:"triggerConfig"`
}
