package shared

import (
	"time"
)

type GetServiceLastAccessedDetailsResponse struct {
	Error                *ErrorDetails
	IsTruncated          *bool
	JobCompletionDate    time.Time
	JobCreationDate      time.Time
	JobStatus            JobStatusTypeEnum
	JobType              *AccessAdvisorUsageGranularityTypeEnum
	Marker               *string
	ServicesLastAccessed []ServiceLastAccessed
}
