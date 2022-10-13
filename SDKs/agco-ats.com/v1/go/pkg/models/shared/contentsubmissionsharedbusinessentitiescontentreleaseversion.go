package shared

import (
	"time"
)

type ContentSubmissionSharedBusinessEntitiesContentReleaseVersion struct {
	ContentDefinitionID *int32     `json:"ContentDefinitionID" form:"name=ContentDefinitionID"`
	ContentReleaseID    *int32     `json:"ContentReleaseID" form:"name=ContentReleaseID"`
	Deleted             *bool      `json:"Deleted" form:"name=Deleted"`
	PublisherUserID     *int32     `json:"PublisherUserID" form:"name=PublisherUserID"`
	ReleaseID           *int32     `json:"ReleaseID" form:"name=ReleaseID"`
	TestReportURL       *string    `json:"TestReportUrl" form:"name=TestReportUrl"`
	UpdatedDate         *time.Time `json:"UpdatedDate" form:"name=UpdatedDate"`
	Version             *int32     `json:"Version" form:"name=Version"`
}
