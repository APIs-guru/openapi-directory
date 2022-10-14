package shared

import (
	"time"
)

type ContentSubmissionSharedBusinessEntitiesRelease struct {
	BuildDate     *time.Time `json:"BuildDate,omitempty" form:"name=BuildDate"`
	ReleaseDate   *time.Time `json:"ReleaseDate,omitempty" form:"name=ReleaseDate"`
	ReleaseID     *int32     `json:"ReleaseID,omitempty" form:"name=ReleaseID"`
	ReleaseNumber *string    `json:"ReleaseNumber,omitempty" form:"name=ReleaseNumber"`
	Visible       *bool      `json:"Visible,omitempty" form:"name=Visible"`
}
