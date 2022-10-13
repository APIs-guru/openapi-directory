package shared

import (
	"time"
)

type ChangesetInfo struct {
	ChangeType           *ChangeTypeEnum      `json:"changeType"`
	ChangesetArn         *string              `json:"changesetArn"`
	ChangesetLabels      map[string]string    `json:"changesetLabels"`
	CreateTimestamp      *time.Time           `json:"createTimestamp"`
	DatasetID            *string              `json:"datasetId"`
	ErrorInfo            *ErrorInfo           `json:"errorInfo"`
	FormatParams         map[string]string    `json:"formatParams"`
	FormatType           *FormatTypeEnum      `json:"formatType"`
	ID                   *string              `json:"id"`
	SourceParams         map[string]string    `json:"sourceParams"`
	SourceType           *SourceTypeEnum      `json:"sourceType"`
	Status               *ChangesetStatusEnum `json:"status"`
	UpdatedByChangesetID *string              `json:"updatedByChangesetId"`
	UpdatesChangesetID   *string              `json:"updatesChangesetId"`
}
