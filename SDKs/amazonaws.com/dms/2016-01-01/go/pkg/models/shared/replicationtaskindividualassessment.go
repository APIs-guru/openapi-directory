package shared

import (
	"time"
)

type ReplicationTaskIndividualAssessment struct {
	IndividualAssessmentName                     *string    `json:"IndividualAssessmentName,omitempty"`
	ReplicationTaskAssessmentRunArn              *string    `json:"ReplicationTaskAssessmentRunArn,omitempty"`
	ReplicationTaskIndividualAssessmentArn       *string    `json:"ReplicationTaskIndividualAssessmentArn,omitempty"`
	ReplicationTaskIndividualAssessmentStartDate *time.Time `json:"ReplicationTaskIndividualAssessmentStartDate,omitempty"`
	Status                                       *string    `json:"Status,omitempty"`
}
