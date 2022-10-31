package shared

import (
	"time"
)

type ContentSubmissionSharedBusinessEntitiesContentSubmission struct {
	Attributes          []ContentSubmissionSharedBusinessEntitiesContentSubmissionAttribute `json:"Attributes,omitempty"`
	ContentDefinitionID *int32                                                              `json:"ContentDefinitionID,omitempty"`
	ContentSubmissionID *int32                                                              `json:"ContentSubmissionID,omitempty"`
	Definition          *ContentSubmissionSharedBusinessEntitiesContentDefinition           `json:"Definition,omitempty"`
	JobRunID            *int32                                                              `json:"JobRunID,omitempty"`
	PackageID           *string                                                             `json:"PackageID,omitempty"`
	ReleaseNotes        *string                                                             `json:"ReleaseNotes,omitempty"`
	Repository          *string                                                             `json:"Repository,omitempty"`
	Revision            *int32                                                              `json:"Revision,omitempty"`
	SubmissionDate      *time.Time                                                          `json:"SubmissionDate,omitempty"`
	UserID              *int32                                                              `json:"UserID,omitempty"`
	Version             *int32                                                              `json:"Version,omitempty"`
}
