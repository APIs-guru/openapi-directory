package shared

import (
	"time"
)

type ContentSubmissionSharedBusinessEntitiesContentSubmission struct {
	Attributes          []ContentSubmissionSharedBusinessEntitiesContentSubmissionAttribute `json:"Attributes"`
	ContentDefinitionID *int32                                                              `json:"ContentDefinitionID"`
	ContentSubmissionID *int32                                                              `json:"ContentSubmissionID"`
	Definition          *ContentSubmissionSharedBusinessEntitiesContentDefinition           `json:"Definition"`
	JobRunID            *int32                                                              `json:"JobRunID"`
	PackageID           *string                                                             `json:"PackageID"`
	ReleaseNotes        *string                                                             `json:"ReleaseNotes"`
	Repository          *string                                                             `json:"Repository"`
	Revision            *int32                                                              `json:"Revision"`
	SubmissionDate      *time.Time                                                          `json:"SubmissionDate"`
	UserID              *int32                                                              `json:"UserID"`
	Version             *int32                                                              `json:"Version"`
}
