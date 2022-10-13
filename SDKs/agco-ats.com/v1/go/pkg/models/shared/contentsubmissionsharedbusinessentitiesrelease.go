package shared

import (
	"time"
)

type ContentSubmissionSharedBusinessEntitiesRelease struct {
	BuildDate     *time.Time `json:"BuildDate" form:"name=BuildDate"`
	ReleaseDate   *time.Time `json:"ReleaseDate" form:"name=ReleaseDate"`
	ReleaseID     *int32     `json:"ReleaseID" form:"name=ReleaseID"`
	ReleaseNumber *string    `json:"ReleaseNumber" form:"name=ReleaseNumber"`
	Visible       *bool      `json:"Visible" form:"name=Visible"`
}
