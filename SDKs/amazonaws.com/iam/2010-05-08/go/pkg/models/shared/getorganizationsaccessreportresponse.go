package shared

import (
	"time"
)

type GetOrganizationsAccessReportResponse struct {
	AccessDetails               []AccessDetail
	ErrorDetails                *ErrorDetails
	IsTruncated                 *bool
	JobCompletionDate           *time.Time
	JobCreationDate             time.Time
	JobStatus                   JobStatusTypeEnum
	Marker                      *string
	NumberOfServicesAccessible  *int64
	NumberOfServicesNotAccessed *int64
}
