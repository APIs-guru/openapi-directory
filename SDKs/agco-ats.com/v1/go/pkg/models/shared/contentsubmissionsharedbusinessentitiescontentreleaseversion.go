package shared

import (
"time")

type ContentSubmissionSharedBusinessEntitiesContentReleaseVersion struct {
    ContentDefinitionID *int32 `json:"ContentDefinitionID,omitempty" form:"name=ContentDefinitionID"`
    ContentReleaseID *int32 `json:"ContentReleaseID,omitempty" form:"name=ContentReleaseID"`
    Deleted *bool `json:"Deleted,omitempty" form:"name=Deleted"`
    PublisherUserID *int32 `json:"PublisherUserID,omitempty" form:"name=PublisherUserID"`
    ReleaseID *int32 `json:"ReleaseID,omitempty" form:"name=ReleaseID"`
    TestReportURL *string `json:"TestReportUrl,omitempty" form:"name=TestReportUrl"`
    UpdatedDate *time.Time `json:"UpdatedDate,omitempty" form:"name=UpdatedDate"`
    Version *int32 `json:"Version,omitempty" form:"name=Version"`
    
}

