package shared

import (
	"time"
)

type ChangesetInfo struct {
	ChangeType           *ChangeTypeEnum      `json:"changeType,omitempty"`
	ChangesetArn         *string              `json:"changesetArn,omitempty"`
	ChangesetLabels      map[string]string    `json:"changesetLabels,omitempty"`
	CreateTimestamp      *time.Time           `json:"createTimestamp,omitempty"`
	DatasetID            *string              `json:"datasetId,omitempty"`
	ErrorInfo            *ErrorInfo           `json:"errorInfo,omitempty"`
	FormatParams         map[string]string    `json:"formatParams,omitempty"`
	FormatType           *FormatTypeEnum      `json:"formatType,omitempty"`
	ID                   *string              `json:"id,omitempty"`
	SourceParams         map[string]string    `json:"sourceParams,omitempty"`
	SourceType           *SourceTypeEnum      `json:"sourceType,omitempty"`
	Status               *ChangesetStatusEnum `json:"status,omitempty"`
	UpdatedByChangesetID *string              `json:"updatedByChangesetId,omitempty"`
	UpdatesChangesetID   *string              `json:"updatesChangesetId,omitempty"`
}
