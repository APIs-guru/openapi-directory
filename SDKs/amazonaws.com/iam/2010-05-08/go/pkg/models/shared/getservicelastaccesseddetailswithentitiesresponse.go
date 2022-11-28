package shared

import (
	"time"
)

type GetServiceLastAccessedDetailsWithEntitiesResponse struct {
	EntityDetailsList []EntityDetails
	Error             *ErrorDetails
	IsTruncated       *bool
	JobCompletionDate time.Time
	JobCreationDate   time.Time
	JobStatus         JobStatusTypeEnum
	Marker            *string
}
